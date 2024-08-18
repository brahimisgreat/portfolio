import { useState } from "react";
import "./Contact.css";
import { NameNSocialLinks } from "../Header/NameNSocialLinks";
import bgi from "../../assets/images/pattern-rings.svg";

export const Contact = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateEmail(email) ||
      message === "" ||
      email === "" ||
      name === ""
    ) {
      setError(true);
    } else {
      setError(false);
      setSuccess(true);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="NAME" className="input1" />
            <input
              type="email"
              placeholder="EMAIL"
              className={error ? "input2Error" : "input2"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            {error && <p className="error">Please enter a valid email</p>}
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              placeholder="MESSAGE"
            ></textarea>
            <button className="contact-button" onClick={handleSubmit}>
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="nsl">
          <NameNSocialLinks />
        </div>
        <div>
          <img
            src={bgi}
            alt="background decoration image"
            className="contact-backImg"
          />
        </div>
      </div>
    </>
  );
};
