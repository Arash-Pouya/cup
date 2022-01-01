import React from "react";
import { NavLink } from "react-router-dom";
import "./Tollbar.css";
const Cuplist = () => {
  return (
    <div className="tollbar">
      <NavLink end style={{ textDecoration: "none" }} to="/">
        <p>Cup</p>
      </NavLink>
      <NavLink end style={{ textDecoration: "none" }} to="/SupetCup">
        <p>SupetCup</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/Monthlyfinal">
        <p>Monthlyfinal</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/Weekendfinal">
        <p>Weekendfinal</p>
      </NavLink>
    </div>
  );
};

export default Cuplist;
