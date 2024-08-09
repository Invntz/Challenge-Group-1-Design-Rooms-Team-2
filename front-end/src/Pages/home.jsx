import Footer from "../Components/Footer";
import PurpleEllipse from '../assets/purple-ellipse.png';
import MagentaEllipse from '../assets/magenta-ellipse.png';
import HomeImg1 from '../assets/home-img-1.jpg';
import HomeImg2 from '../assets/home-img-2.png';
import HomeImg3 from '../assets/home-img-3.png';
import HomeImg4 from '../assets/home-img-4.png';
import "./home.css";
import TopNav from "../Components/TopNav";

// We have to add the TopNavbar inside the home-body div.
function Home() {
  return (
    <>
      <TopNav />
      <div className="home-body">
        <img className="ellipse purple-ellipse"src={PurpleEllipse} alt="purple-ellipse" />
        <img className="ellipse magenta-ellipse"src={MagentaEllipse} alt="purple-ellipse" />
        <div>
          <h1 className="home-heading-text">Create and sell products sustainably</h1>
          <h3 className="home-quote">“Invtz: Revolutionizing Sustainable Fashion”</h3>
          <button className="home-bttn">Start</button>
        </div>
        <div>
          <img className="home-imgs home-img-1"src={HomeImg1} alt="home-img-1" />
          <img className="home-imgs home-img-2"src={HomeImg2} alt="home-img-2" />
          <img className="home-imgs home-img-3"src={HomeImg3} alt="home-img-3" />
          <img className="home-imgs home-img-4"src={HomeImg4} alt="home-img-4" />
        </div>
        <div>
          <h3 className="partners-home-quote">The platform for the ones who believe in change</h3>
          {/* <div className="conditions-div">
            <h4 className="patrners-brand stella-mccartney">Stella McCartney</h4>
            <h4 className="patrners-brand levis">Levi's</h4>
            <h4 className="patrners-brand the-ordinary">The Ordinary</h4>
            <h4 className="patrners-brand patagonia">Patagonia</h4>
        </div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;
