import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div id="contact">
      <h2 className="contact-form-title">Contact</h2>
      <div className="contact-body">
        <div className="contact-aside">
          <p>Get in touch!</p>
          <p>
            <img src="https://img.icons8.com/ios-filled/50/000000/email-open.png" />{" "}
            <a href="mailto: nathan.piper.sd@gmail.com">
              nathan.piper.sd@gmail.com
            </a>
          </p>
          <p>
            <img src="https://img.icons8.com/ios-filled/100/000000/linkedin.png" />{" "}
            <a href="https://www.linkedin.com/in/nathan-piper-3b8610231" target="_blank">linkedin</a>
          </p>
          <p>
            <img src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png" />{" "}
            <a href="tel:7075099345">1 (707) 509-9345</a>
          </p>
        </div>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="to_name"></input>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="user_email" required></input>

          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">{submitStatus ? "Sent!" : "Submit"}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
