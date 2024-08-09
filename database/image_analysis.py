from PIL import Image
import torchvision.transforms as transforms
import torch
import torchvision.models as models
from torch.nn import functional as F
import json
import requests
import numpy as np
from sklearn.cluster import KMeans
import matplotlib.colors as mcolors


def extract_keywords_from_image(image_path):
    # Open the image
    image = Image.open(image_path)

    # Transform the image for analysis
    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    input_tensor = preprocess(image)
    input_batch = input_tensor.unsqueeze(0)  # Add a batch dimension

    # Move the input to the GPU if available
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    input_batch = input_batch.to(device)

    # Load the pre-trained ResNet model and perform inference
    model = models.resnet50(weights=models.ResNet50_Weights.IMAGENET1K_V1)
    model = model.to(device)
    model.eval()

    with torch.no_grad():
        output = model(input_batch)

    # Convert the output to probabilities using softmax
    probabilities = F.softmax(output[0], dim=0)

    # Load ImageNet class labels
    labels_url = "https://raw.githubusercontent.com/anishathalye/imagenet-simple-labels/master/imagenet-simple-labels.json"
    labels = requests.get(labels_url).json()

    # Extract top 10 classes and their probabilities
    _, indices = torch.sort(probabilities, descending=True)
    percentage = probabilities * 100

    top10 = [(labels[idx], percentage[idx].item()) for idx in indices[:10]]

    # Extract keywords
    keywords = [item[0] for item in top10]

    # Prepare image data for color extraction using K-means clustering
    image_np = np.array(image)
    image_np = image_np.reshape((image_np.shape[0] * image_np.shape[1], 3))

    # Use K-means to extract the main colors
    kmeans = KMeans(n_clusters=5, random_state=42, n_init=10)
    kmeans.fit(image_np)

    # Get the cluster centers (main colors)
    colors = kmeans.cluster_centers_
    colors = np.round(colors).astype(int)

    # Convert RGB values to common color names
    def rgb_to_name(rgb_tuple):
        min_colors = {}
        for name, rgb in mcolors.CSS4_COLORS.items():
            r_c, g_c, b_c = mcolors.hex2color(rgb)
            rd = (r_c * 255 - rgb_tuple[0]) ** 2
            gd = (g_c * 255 - rgb_tuple[1]) ** 2
            bd = (b_c * 255 - rgb_tuple[2]) ** 2
            min_colors[(rd + gd + bd)] = name
        return min_colors[min(min_colors.keys())]

    # Add the extracted color names to the keywords list
    color_names = [rgb_to_name(tuple(color)) for color in colors]
    keywords.extend(color_names)

    return keywords

