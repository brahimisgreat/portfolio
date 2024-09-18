import frontEnd from "../../assets/images/icon-frontend-mentor.svg";
import github from "../../assets/images/icon-github.svg";
import linkedin from "../../assets/images/icon-linkedin.svg";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact  flex flex-col items-center justify-center ">
  
    <form className="flex flex-col items-center w-11/12">
      <filedset>
        <legend className="text-4xl font-bold text-center ">Contact</legend>
        <p>I would love to hear about your project and how I could help.
         Please fill in the form, and I’ll get back to you as soon as possible.
         </p>
         <p >
          <input  className="w-full bg-transparent h-11 border-b-2" placeholder="NAME" /> 
         </p>
         <p>
          <input  className="w-full bg-transparent h-11 border-b-2" placeholder="EMAIL" type="email"/>
         </p>
         <p>
          <textarea   className="w-full bg-transparent h-28 border-b-2 py-2" placeholder="MESSAGE"/>
         </p>
         <button>SEND MESSAGE</button>
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
