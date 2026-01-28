import React from "react";

function AlertArea() {
  return (
    <div className="tab-content">
      <h2>Alert Area</h2>
      <form className="alert-form">
        <label>Select Area</label>
        <input type="text" placeholder="Enter area name or ZIP code" />

        <label>Alert Message</label>
        <textarea placeholder="Enter message to residents"></textarea>

        <button type="submit">Send Alert</button>
      </form>
    </div>
  );
}

export default AlertArea;
