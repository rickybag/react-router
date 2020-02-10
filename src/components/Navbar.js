import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export default () => (
  <ul>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/html" activeClassName="active">
        HTML
      </NavLink>
    </li>
    <li>
      <NavLink to="/js" activeClassName="active">
        JavaScript
      </NavLink>
    </li>
    <li>
      <NavLink to="/css" activeClassName="active">
        CSS
      </NavLink>
    </li>
  </ul>
);
