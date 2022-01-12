import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// const dotenv = require("dotenv");

function Contact() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const form = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    const elements = {
      name: e.target.name,
      email: e.target.email,
      message: e.target.message
    };
    if (!submitStatus) {
      emailjs
        .sendForm(
          "service_gmld2ys",
          "template_nr3gwiz",
          form.current,
          "user_lXjYwTQ6tLx48Qt9b27XP"
        )
        .then(
          result => {
            console.log(result.text);
            for (let element in elements) {
              elements[element].value = null;
            }
            setSubmitStatus(true);
          },
          error => {
            console.log(error.text);
          }
        );
    } else {
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-form-title">Contact</h1>
      <div className="contact-body">
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="to_name"></input>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="user_email" required></input>

          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">{submitStatus ? "Sent!" : "Submit"}</button>
        </form>
        <div className="contact-aside">
        </div>
      </div>
    </div>
  );
}

export default Contact;
