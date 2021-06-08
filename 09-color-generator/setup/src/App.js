import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f92723").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    // renderColors(color);
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  // const renderColors = () => {
  //   console.log("rendering colors based off: ", color);
  //   return (
  //     <div>
  //       <h2>This is a color: {color}</h2>
  //     </div>
  //   );
  // };

  return (
    <>
      <section className="container">
        <h2>color generator </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f92723"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
