import React from "react";
import "./Contact.css";
import { NameNSocialLinks } from "../Header/NameNSocialLinks";
import  bgi from '../../assets/images/pattern-rings.svg'

export const Contact = () => {
  return (
    <>

    <div className="contact-container">
      <div className="contact">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form>
          <input type="text" placeholder="NAME" className="input1" />
          <input type="email" placeholder="EMAIL" className="input2" />
          <textarea placeholder="MESSAGE"></textarea>
          <button type="submit" className="contact-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="nsl">
        <NameNSocialLinks  />
      </div>
    <img src={bgi} alt="background decoration image" className="contact-backImg" />
    </div>
    </>
  );
};
