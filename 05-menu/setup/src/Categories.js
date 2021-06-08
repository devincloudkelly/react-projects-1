import React from "react";

const Categories = ({ updateMenu, categories }) => {
  // don't need an eventHandler since we passed down 'updateMenu()' and can just pass in the category
  // const sendMenu = (e) => {
  //   updateMenu(e.target.innerText.toLowerCase());
  // };

  return (
    <section className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => updateMenu(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
