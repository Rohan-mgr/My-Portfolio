import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import Button from "../../Components/Button/Button";

function Contact() {
  return (
    <Container fluid id="contact">
      <h2 className="number-heading">
        <span>03.</span> Get In Touch
      </h2>
      <form onSubmit="">
        <div className="Contact__form__left">
          <label htmlFor="fullName">
            Name:<sup>*</sup>{" "}
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            id="fullName"
            required
          />
          <label htmlFor="phone">
            Phone:<sup>*</sup>{" "}
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            id="phone"
            required
          />
          <label htmlFor="email">
            E-mail:<sup>*</sup>{" "}
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Your E-mail"
            id="email"
            required
          />
        </div>
        <div className="Contact__form__right">
          <label htmlFor="message">
            Message:<sup>*</sup>
          </label>
          <textarea
            style={{ resize: "none" }}
            placeholder="Your Message...."
            name="message"
            id="message"
            rows="9"
            required
          />
          {/* <button type="submit">Send Your Message</button> */}
          <Button>Send Your Message</Button>
        </div>
        {/* {loading && (
          <div className={classes.loader__wrapper}>
            <span className={classes.loader}></span>
          </div>
        )} */}
      </form>
    </Container>
  );
}

export default Contact;
