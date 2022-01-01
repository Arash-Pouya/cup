import React from "react";
// import week from "../assets/img2.jpg";
import Ticket from "../component/Ticket/Ticket";
import Timer from "../component/Timer/Timer";
const Weekendfinal = () => {
  return (
    <div>
      <div className="bord">
        <div className="topbox">
          {/* <img src={week} /> */}
          <Timer date="2022-01-07T00:00:00" />
        </div>
        <div className="cards">
          <Ticket title="بلیط شماره یک" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket one")} />
        </div>
        <div className="timers">
          <Timer date="2022-01-07T00:00:00" />
        </div>
      </div>
    </div>
  );
};

export default Weekendfinal;
