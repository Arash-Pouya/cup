import React from "react";
import { NavLink } from "react-router-dom";
import "./Tollbar.css";
const Tollbar = () => {
  return (
    <div className="tollbar">
      <NavLink end style={{ textDecoration: "none" }} to="/">
        <p>All Cup</p>
      </NavLink>
      <NavLink end style={{ textDecoration: "none" }} to="/SuperCup">
        <p>Super Cup</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/Monthlyfinal">
        <p>Monthly final Cup</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/Weekendfinal">
        <p>Weekend final Cup</p>
      </NavLink>
    </div>
  );
};

export default Tollbar;
