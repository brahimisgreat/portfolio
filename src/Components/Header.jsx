import React from "react";
import frontEnd from "../assets/images/icon-frontend-mentor.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";

export const Header = () => {
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

      <nav className="hidden">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
