import { useState } from "react";
import frontEnd from "../assets/images/icon-frontend-mentor.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import { TiThMenu } from "react-icons/ti";
import './Header.css'


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <header className="header  flex flex-col items-center gap-6 mt-10 md:flex-row md:justify-between lg:max-w-full">
      <h1 className="text-2xl font-bold md:text-3xl">Brahim Coulibaly</h1>
      <div className="flex gap-4 md:gap-6">
        <a className="in" href="https://www.frontendmentor.io/profile/brahimisgreat" target="_blank" >
          <img src={frontEnd} alt="link to frontend mentor" />
        </a>
        <a className="in" href="https://github.com/brahimisgreat" target="_blank" >
          <img src={github} alt="link to github" />
        </a>
        <a className="in" href="https://www.linkedin.com/in/brahim-coulibaly/" target="_blank" >
          <img src={linkedin} alt="link to linkedin" />
        </a>
      </div>





      <nav className={isMenuOpen ? 'open' : 'hidden'}>
      <span className={isMenuOpen ? '' : 'hidden'} onClick={handleMenu} >X</span>
        <ul className="flex flex-col items-start gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
