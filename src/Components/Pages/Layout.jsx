import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/use-state-hook">Use State Hook</Link>
      </li>
    </ul>
  );
}

export default Layout;
