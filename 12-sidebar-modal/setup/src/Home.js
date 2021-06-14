import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // this is one way of accessing Context from the context.js file. Requires two imports, one of 'useContext' from 'react', and one of the context component we created, 'AppContext' from our context file.
  // const data = useContext(AppContext);
  // console.log(data);

  // second method of accessing our context is by creating a custom hook in the context file, then exporting it and importing it where needed. If we do that, we only need to import that hook, we don't need to import useContext from react or the specific context component we created - we already have access to those through the custom hook.
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
