import React, { useState } from "react";
import data from "./data";

function App() {
  const [lorem, setLorem] = useState([]);
  const [paragraphs, setParagraphs] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paragraphs <= 0) {
      setLorem(data.slice(0, 1));
      return;
    }
    if (paragraphs > data.length) {
      setLorem(data);
      return;
    }
    const newArray = data.slice(0, paragraphs);
    console.log(newArray);
    setLorem(newArray);
    return;
  };

  const generateLorem = () => {
    if (lorem.length === 0) {
      return;
    }
    return lorem.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">paragraphs: </label>
        <input
          type="number"
          id="paragraphs"
          name="paragraphs"
          value={paragraphs}
          onChange={(e) => {
            setParagraphs(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">{generateLorem()}</article>
    </section>
  );
}

export default App;
