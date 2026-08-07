const data = [
  {
    title: "Upload PDF",
    desc: "Upload policies, contracts and manuals."
  },
  {
    title: "Ask Questions",
    desc: "Chat with your documents naturally."
  },
  {
    title: "Evidence",
    desc: "Every answer includes citations."
  },
  {
    title: "Compare",
    desc: "Compare two document versions."
  }
];

function Features() {
  return (
    <section className="features">

      <h2>Features</h2>

      <div className="cards">

        {data.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;