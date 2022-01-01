import React from "react";
import "./Ticket.css";
const Ticket = (props) => {
  return (
    <div class="card">
      <div class="content">
        <h2 class="title">{props.title}</h2>
        <p class="copy">{props.main}</p>
        <button class="btn" onClick={props.click}>
          خرید
        </button>
      </div>
    </div>
  );
};

export default Ticket;
