import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  // setting up the toggle to show/hide links when you click on the menu bars can be done several ways.
  // 1. You can set a state variable to handle if the links are shown or not, then conditionally render the div with the links, but this mounts and unmounts that section, which doesn't allow us to gracefully transition it in and out.
  // 2. Use CSS to set height of container from 0 to something, based on a state value. Create state value for showLinks, then use string interpolation on the class for the div containing the links to conditionally include a classname.
  // className={`links-container ${showLinks ? "show-container" : null}`}
  // ***: With the solution above, since we our links are dynamically generated, we need the height of the links container to be dynamic as well, to allow for all links to show without there being too much extra space.
  // 3. Use useRef to keep track of height of the links, then you can use a useEffect to get the height of the links <ul>, and conditionally set the height of the links container to that height of the links ul, or set it to 0 if showLinks is false.

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="a logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
          {/* <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
