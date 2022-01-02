import React from "react";
import fullcup from "../assets/img4.jpg";
import Ticket from "../component/Ticket/Ticket";
import Timer from "../component/Timer/Timer";
const Supercup = () => {
  return (
    <>
      <div className="bord">
        <div className="topbox">
          <img src={fullcup} />
          <Timer date="2022-03-01T00:00:00" title="Super Cup" />
        </div>
        <div className="cards">
          <Ticket title="بلیط شماره یک" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 1")} />
          <Ticket title="بلیط شماره دو" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 2")} />
          <Ticket title="بلیط شماره سه" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 3")} />
          <Ticket title="بلیط شماره چهار" main="برای شرکت در مسابقه این بلیط را خریداری کنید" click={() => alert("Ticket 4")} />
        </div>
      </div>
    </>
  );
};

export default Supercup;
