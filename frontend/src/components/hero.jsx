import UploadBox from "./UploadBox";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Understand Any Document
        <br />
        with AI
      </h1>

      <p>
        Upload policies, contracts, manuals or PDFs and get accurate,
        evidence-backed answers with citations.
      </p>

      <UploadBox />
    </section>
  );
}

export default Hero;