import React from "react";
import { NavLink } from "react-router-dom";
import "./CupPanel.css";
const CupPanel = () => {
  return (
    <div className="cupPanel">
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

export default CupPanel;
