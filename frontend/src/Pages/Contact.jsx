import React from "react";
import '../Styles/Contact.css'
import Navbar from "../Components/Navbar";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_YOUR_ACCESS_KEY_HERE);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent"); // Alert when message is successfully sent
    }
  };

  return (
    <>
    <Navbar />
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us:</h2>
        <p className="contact-instructions">Kindly contact us using the form below:</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              name="message"
              id="message"
              required
              className="contact-textarea"
            ></textarea>
          </div>
          <button
            type="submit"
            className="contact-button"
          >
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
