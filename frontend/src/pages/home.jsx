import Navbar from "../components/navbar";
import Hero from "../components/hero";
import UploadBox from "../components/uploadBox";
import AskAI from "../components/askAI";
import Features from "../components/features";
import Footer from "../components/footer";

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
