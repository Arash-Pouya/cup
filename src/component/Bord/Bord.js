import React from "react";
import Ticket from "../Ticket/Ticket";
import Timer from "../Timer/Timer";
import fullcup from "../../assets/img4.jpg";
import "./Bord.css";
const Bord = () => {
  return (
    <div className="bord">
      <div className="topbox">
        <img src={fullcup} />
      </div>
      <div className="cards"></div>
      <div className="timers"></div>
    </div>
  );
};

export default Bord;
