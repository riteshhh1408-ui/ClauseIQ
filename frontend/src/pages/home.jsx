import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import AskAI from "../components/AskAI";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UploadBox />
      <AskAI />
      <Features />
      <Footer />
    </>
  );
}

export default Home;