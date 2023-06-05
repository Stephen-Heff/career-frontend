import { useState, useEffect } from "react";

export default function Apply() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file here
    console.log("Selected file:", file);
  };

  return (
    <section className="apply-section" id="apply">
      <h2>Job Application</h2>

      <div className="apply-flexbox">
        <form method="get">
          <div className="apply-container">
            <div>
              <label htmlFor="postingID">Posting ID:</label>
              <input
                type="text"
                id="postingID"
                name="postingID"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="number" id="phone" name="phone" />
            </div>
            <div>
              <h2>Upload your resume</h2>
              <input className="file-input" type="file" onChange={handleFileChange} />
            </div>
          </div>
          <button className="apply-btn" type="submit">
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
}
