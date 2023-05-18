import { useState, useEffect } from "react";
export default function Contact() {
  return (
    <section class="contact-section" id="contact">
      <h2>Contact Me</h2>

      <div class="contact-flexbox">
        {/* <form method="get">
          <div class="contact-container">
            <div class="contact-box">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label for="Subject">Subject</label>
              <input type="text" id="Subject" name="Subject" />
            </div>
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button class="contact-btn" type="submit">
            Send
          </button>
        </form> */}

        <ul>
          <li>Email: folosstephen@gmail.com</li>
          <li>Location: Based out of Toronto.</li>
        </ul>
      </div>
    </section>
  );
}
