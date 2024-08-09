import sqlite3
from image_analysis import extract_keywords_from_image


# Set the image path (update this to the path where your image is located)
image_path = '/Users/wooah/dev/invntz/Challenge-Group-1-Design-Rooms-Team-2/database/resource/Magdalena_Frackowiak.jpg'

# Extract keywords from the image using the function from image_analysis.py
keywords = extract_keywords_from_image(image_path)

# Print the extracted keywords
print("Extracted Keywords from Fashion Image:")
print(keywords)

# Connect to the SQLite database
db_path = 'invntz.db'  # Path to your database file
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Build the SQL query
query = """
SELECT * FROM products
WHERE """ + " OR ".join([f"description LIKE '%{keyword}%'" for keyword in keywords])

# Execute the SQL query
cursor.execute(query)

# Fetch the results
results = cursor.fetchall()

# Print the results
print(f"Found {len(results)} products matching the keywords.")
for result in results:
    print(result)

# Close the connection
conn.close()

