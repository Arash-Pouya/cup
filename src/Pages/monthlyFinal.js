import React from "react";
// import month from "../assets/img3.jpg";
import Ticket from "../component/Ticket/Ticket";
import Timer from "../component/Timer/Timer";
const Monthlyfinal = () => {
  return (
    <div>
      <div className="bord">
        <div className="topbox">
          {/* <img src={month} /> */}
          <Timer date="2022-03-01T00:00:00" />
        </div>
        <div className="cards">
          <Ticket title="بلیط شماره یک" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 1")} />
          <Ticket title="بلیط شماره دو" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 2")} />
        </div>
        <div className="timers">
          <Timer date="2022-03-01T00:00:00" />
        </div>
      </div>
    </div>
  );
};

export default Monthlyfinal;
