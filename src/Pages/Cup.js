import React from "react";
import "./cup.css";
// import fullcup from "../assets/img4.jpg";
import Ticket from "../component/Ticket/Ticket";
import Timer from "../component/Timer/Timer";
const Cup = () => {
  return (
    <div className="bord">
      <div className="topbox">{/* <img src={fullcup} /> */}</div>
      <div className="cards">
        <Ticket title="بلیط شماره یک" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 1")} />
        <Ticket title="بلیط شماره دو" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 2")} />
        <Ticket title="بلیط شماره سه" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 3")} />
        <Ticket title="بلیط شماره چهار" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 4")} />
        <Ticket title="بلیط شماره پنج" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 5")} />
      </div>
      <div className="timers">
        <Timer date="2022-12-24T00:00:00" />
        <Timer date="2022-11-24T00:00:00" />
        <Timer date="2022-10-24T00:00:00" />
      </div>
    </div>
  );
};

export default Cup;
