import frontEnd from "../../assets/images/icon-frontend-mentor.svg";
import github from "../../assets/images/icon-github.svg";
import linkedin from "../../assets/images/icon-linkedin.svg";
import "./Contact.css";
import rings from "../../assets/images/pattern-rings.svg";

export default function Contact() {
  return (
    <div className="contact  flex flex-col items-center  py-16 gap-16 lg:gap-0  lg:py-6  ">
      <form className="form flex flex-col items-center w-11/12 md:w-2/3   ">
        <div className="box1 flex flex-col  lg:flex-row ">
          <div className="box3 flex flex-col gap-10" >
            <legend className="text-4xl font-bold text-center md:text-7xl lg:text-left lg:text-8xl">
              Contact
            </legend>
            <p className="text-center mb-4 md:text-xl lg:text-left lg:text-lg">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="box6 flex flex-col gap-7">
            <p>
              <input
                className="w-full bg-transparent h-11 border-b-2"
                placeholder="NAME"
              />
            </p>
            <p>
              <input
                className="w-full bg-transparent h-11 border-b-2"
                placeholder="EMAIL"
                type="email"
              />
            </p>
            <p>
              <textarea
                className="w-full bg-transparent h-32 border-b-2 py-2"
                placeholder="MESSAGE"
              />
            </p>
            <button
              type="submit"
              className="border-b-4 border-emerald-600 self-end py-4"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>

      <footer className="footer flex flex-col gap-4 relative md:flex-row md:gap-8 lg:gap-16 ">
        <p className="text-xl font-bold md:text-2xl">Brahim Coulibaly</p>
        <p className="text-gray-300">240-709-9372</p>
        <p>Brahimiscoding@gmail.com</p>
        <div className="flex gap-6 md:ml-14">
          <a>
            <img src={frontEnd} alt="link to frontend mentor" />
          </a>
          <a>
            <img src={github} alt="link to github" />
          </a>
          <a>
            <img src={linkedin} alt="link to linkedin" />
          </a>
        </div>
      </footer>
      <img src={rings} className="c-rings absolute md:right-3/4  " />
    </div>
  );
}
