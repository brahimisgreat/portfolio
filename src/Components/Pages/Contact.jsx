import frontEnd from "../../assets/images/icon-frontend-mentor.svg";
import github from "../../assets/images/icon-github.svg";
import linkedin from "../../assets/images/icon-linkedin.svg";
import "./Contact.css";
import rings from '../../assets/images/pattern-rings.svg'

export default function Contact() {
  return (
    <div className="contact  flex flex-col items-center justify-center py-16 gap-16 ">
      <form className="form flex flex-col items-center w-11/12 md:w-2/3   ">
        <div className="flex flex-col gap-7">
          <legend className="text-4xl font-bold text-center md:text-7xl ">Contact</legend>
          <p className="text-center mb-4 md:text-xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
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
      </form>

      <footer className="footer flex flex-col gap-4 relative md:flex-row md:gap-8 ">
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
        <img src={rings} className="c-rings absolute md:right-3/4 "  />
    </div>
  );
}
