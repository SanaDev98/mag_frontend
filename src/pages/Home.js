import Navbar from "../components/Navbar";
import HorizontalAd from "../components/HorizontalAd";
import NewspaperView from "../components/NewspaperView";
import YoutubeVideoSection from "../components/YoutubeVideoSection";
import PreviousEditionsSection from "../components/PreviousEditionsSection";
import ThreeAdSection from "../components/ThreeAdSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <HorizontalAd />
        <NewspaperView />
        <YoutubeVideoSection />
        <PreviousEditionsSection />
        <HorizontalAd />
        <ThreeAdSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
