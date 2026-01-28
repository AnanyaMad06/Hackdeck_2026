import React, { useState } from "react";

function FIRForm() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setStatus("Please enter incident details.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submit-fir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit FIR");
      }

      setStatus("✅ FIR submitted successfully");
      setDescription("");
    } catch (error) {
      console.error(error);
      setStatus("❌ Error submitting FIR. Try again.");
    }
  };

  return (
    <div className="tab-content">
      <h2>Register FIR</h2>

      <form className="fir-form" onSubmit={handleSubmit}>
        <label>Description of Incident</label>
        <textarea
          rows="6"
          placeholder="Describe the incident in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit FIR</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default FIRForm;
