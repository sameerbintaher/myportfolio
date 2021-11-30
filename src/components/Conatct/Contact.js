import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kv8s00n",
        "template_050zdba",
        form.current,
        "user_g0x4ln2bGqfdaRmujpQYq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      data-aos="zoom-in-right"
      className="container p-md-5 p-2 mt-5"
      style={{
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="contact"
    >
      <h1 className="purple mt-5">Contact with me</h1>
      <p className="text-white">
        I'm always here to learn from you. Whether you have a question or just
        want to say hi, fell free to drop a message. I'll try my best to get
        back to you!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="purple border-3 shadow-lg px-md-5 py-md-3 p-2 rounded"
      >
        <h5 style={{ textAlign: "left", marginBottom: "-20px" }}>Name</h5>
        <br />
        <input
          type="text"
          placeholder="Your name"
          className="w-100 rounded"
          name="name"
        />
        <br />
        <h5
          style={{
            textAlign: "left",
            marginBottom: "-20px",
            marginTop: "15px",
          }}
        >
          Email
        </h5>
        <br />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-100 rounded"
          name="user_email"
        />
        <br />
        <h5
          style={{
            textAlign: "left",
            marginBottom: "-20px",
            marginTop: "15px",
          }}
        >
          Subject
        </h5>
        <br />
        <input
          type="subject"
          placeholder="Please provide your subject"
          className="w-100 rounded"
          name="subject"
        />
        <br />
        <h5
          style={{
            textAlign: "left",
            marginBottom: "-20px",
            marginTop: "15px",
          }}
        >
          Message
        </h5>{" "}
        <br />
        <textarea
          name="message"
          placeholder="Your valuable message"
          className="w-100 rounded"
        />
        <Button type="submit" className="rounded mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
};
