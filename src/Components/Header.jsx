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
    <header className="header  flex flex-col items-center gap-6 ">
      <h1 className="text-2xl font-bold">Brahim Coulibaly</h1>
      <div className="flex gap-4">
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

      <TiThMenu className={isMenuOpen ? 'hidden' : ' text-2xl absolute right-7 top-2 '}  onClick={handleMenu} />




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
