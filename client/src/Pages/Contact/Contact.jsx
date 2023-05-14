import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import { useFormik } from "formik";
import MySpinner from "../../Components/Spinner/Spinner";
import { contactFormValidation } from "../../validation-schema/validation";

function Contact() {
  const formik = useFormik({
    initialValues: {
      from_name: "",
      phone: "",
      user_email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: contactFormValidation,
  });

  return (
    <Container fluid id="contact">
      <h2 className="number-heading">
        <span>03.</span> Get In Touch
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="Contact__form__left">
          <label htmlFor="fullName">
            Name:<sup>*</sup>{" "}
          </label>
          <input
            type="text"
            name="from_name"
            value={formik.values.from_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Full Name"
            id="fullName"
          />
          {formik.errors.from_name && formik.touched.from_name && (
            <span style={{ color: "red" }}>{formik.errors.from_name}</span>
          )}

          <label htmlFor="phone">
            Phone:<sup>*</sup>{" "}
          </label>
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Phone Number"
            id="phone"
          />
          {formik.errors.phone && formik.touched.phone && (
            <span style={{ color: "red" }}>{formik.errors.phone}</span>
          )}

          <label htmlFor="email">
            E-mail:<sup>*</sup>{" "}
          </label>
          <input
            type="email"
            name="user_email"
            value={formik.values.user_email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your E-mail"
            id="email"
          />
          {formik.errors.user_email && formik.touched.user_email && (
            <span style={{ color: "red" }}>{formik.errors.user_email}</span>
          )}
        </div>
        <div className="Contact__form__right">
          <label htmlFor="message">
            Message:<sup>*</sup>
          </label>
          <textarea
            style={{ resize: "none" }}
            placeholder="Your Message...."
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="message"
            rows="9"
          />
          {formik.errors.message && formik.touched.message && (
            <span style={{ color: "red" }}>{formik.errors.message}</span>
          )}
          <Button Type="submit">
            {formik.isSubmitting ? (
              <>
                <MySpinner /> Sending Your Message...
              </>
            ) : (
              "Send Your Message"
            )}
          </Button>
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
