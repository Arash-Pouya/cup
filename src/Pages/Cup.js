import React from "react";
import "./cup.css";
import fullcup from "../assets/img4.jpg";
import Ticket from "../component/Ticket/Ticket";
import Timer from "../component/Timer/Timer";
const Cup = () => {
  return (
    <div className="bord">
      <div className="topbox">
        <img src={fullcup} />
      </div>
      <div className="cards">
        <Ticket title="بلیط شماره یک" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 1")} />
        <Ticket title="بلیط شماره دو" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 2")} />
        <Ticket title="بلیط شماره سه" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 3")} />
        <Ticket title="بلیط شماره چهار" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 4")} />
        <Ticket title="بلیط شماره پنج" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 5")} />
      </div>
      <div className="timers">
        <Timer date="2022-01-07T00:00:00" title="Weekly Cup" />
        <Timer date="2022-02-01T00:00:00" title="Monthly Cup" />
        <Timer date="2022-03-01T00:00:00" title="Super Cup" />
      </div>
    </div>
  );
};

export default Cup;
