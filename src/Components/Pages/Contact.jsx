import React from "react";
import frontEnd from "../../assets/images/icon-frontend-mentor.svg";
import github from "../../assets/images/icon-github.svg";
import linkedin from "../../assets/images/icon-linkedin.svg";

export default function Contact() {
  return (
    <div className="">
    <form>
      <filedset>
        <legend>Contact</legend>
        <p>I would love to hear about your project and how I could help.
         Please fill in the form, and I’ll get back to you as soon as possible.
         </p>
         <p>
          <label>
              NAME
          </label>
          <input />
         </p>
         <p>
          <label>
              EMAIL
          </label>
          <input  type="email"/>
         </p>
         <p>
          <label>
            MESSAGE
          </label>
          <textarea />
         </p>


      </filedset>

    </form>
      <footer className="flex gap-4">
        <a>
          <img src={frontEnd} alt="link to frontend mentor" />
        </a>
        <a>
          <img src={github} alt="link to github" />
        </a>
        <a>
          <img src={linkedin} alt="link to linkedin" />
        </a>
      </footer>
    </div>
  );
}
