import React from "react";
import "./Tollbar.css";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
const Tollbar = () => {
  return (
    <div className="tollbar">
      <NavLink end style={{ textDecoration: "none" }} to="/">
        <span>
          <AiFillHome style={{ width: "35px", height: "35px", color: "black" }} />
        </span>
      </NavLink>
      <NavLink end style={{ textDecoration: "none" }} to="/Notfound">
        <span>
          <AiOutlinePhone style={{ width: "35px", height: "35px", color: "black" }} />
        </span>
      </NavLink>
      <NavLink end style={{ textDecoration: "none" }} to="/Notfound">
        <span>
          <AiOutlineInfoCircle style={{ width: "35px", height: "35px", color: "black" }} />
        </span>
      </NavLink>
    </div>
  );
};

export default Tollbar;
