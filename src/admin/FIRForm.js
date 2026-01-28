import React from "react";

function FIRForm() {
  return (
    <div className="tab-content">
      <h2>Register FIR</h2>
      <form className="fir-form">
        <label>Name of Complainant</label>
        <input type="text" placeholder="Enter name" />

        <label>Type of Crime</label>
        <select>
          <option>Theft</option>
          <option>Assault</option>
          <option>Fraud</option>
          <option>Other</option>
        </select>

        <label>Date of Incident</label>
        <input type="date" />

        <label>Location</label>
        <input type="text" placeholder="Enter location" />

        <label>Description</label>
        <textarea placeholder="Describe the incident"></textarea>

        <button type="submit">Submit FIR</button>
      </form>
    </div>
  );
}

export default FIRForm;
