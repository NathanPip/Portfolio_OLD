import React, { useState, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import emailjs from "@emailjs/browser";

function Contact() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const elements = {
      name: e.target.name,
      email: e.target.email,
      message: e.target.message,
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
          (result) => {
            console.log(result.text);
            for (let element in elements) {
              elements[element].value = null;
            }
            setSubmitStatus(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
    }
  };

  return (
    <AnimationOnScroll
      className="contact"
      animateIn="fade-in"
      duration={0.5}
      offset={200}
      animateOnce={true}
      >
      <h2 id="contact" className="contact-form-title">Contact</h2>
      <div className="contact-body">
        <AnimationOnScroll
          className="contact-aside"
          animateIn="slide-in-left"
          duration={1}
          offset={200}
          delay={500}
          animateOnce={true}
        >
          <p>Get in touch!</p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email-open.png"
              alt="email envelope icon"
            />{" "}
            <a href="mailto: nathan.piper.sd@gmail.com">
              nathan.piper.sd@gmail.com
            </a>
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"
              alt="linkedin logo"
            />{" "}
            <a
              href="https://www.linkedin.com/in/nathan-piper-3b8610231"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"
              alt="telephone icon"
            />{" "}
            <a href="tel:7075099345">1 (707) 509-9345</a>
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="contact-form-container"
          animateIn="slide-in-right"
          duration={1}
          offset={200}
          delay={500}
          animateOnce={true}
        >
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="to_name"></input>

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="user_email" required></input>

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">{submitStatus ? "Sent!" : "Submit"}</button>
          </form>
        </AnimationOnScroll>
      </div>
    </AnimationOnScroll>
  );
}

export default Contact;
