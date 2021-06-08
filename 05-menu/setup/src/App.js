import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// this uses the Set data structure to remove duplicates and only return unique values. It returns an object so we spread it into an array with the 'all' category
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // these categories are set up so the categories can be dynamic and accept future additions/changes to the categories, auto generating menus and buttons.
  const [categories, setCategories] = useState(allCategories);

  const updateMenu = (menu) => {
    if (menu === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === menu);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories updateMenu={updateMenu} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
