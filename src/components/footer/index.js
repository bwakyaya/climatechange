import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <h3>Useful Links</h3>
        <a href="https://climatefinance.go.ug/user/login">
          Login | Climate Finance Uganda
        </a>
        <a href="https://ccd.go.ug">Climate Change Department</a>
        <a href="https://climateknowledgeportal.worldbank.org">
          Climate Change Knowledge Portal
        </a>
        <a href="https://ibp.finance.go.ug">Integrated Bank of Projects</a>
        <a></a>
      </div>
      <div className="resources">
        <h3>Resources</h3>
      </div>
      <div className="feedback">
        <h3>Feedback</h3>
        <form>
          <label>Email</label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <label>Description</label>
          <textarea></textarea>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
