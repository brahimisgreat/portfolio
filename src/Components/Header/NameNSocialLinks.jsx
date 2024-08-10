import linkedin from "../../assets/images/icon-linkedin.svg";
import github from "../../assets/images/icon-github.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import frontendmentor from "../../assets/images/icon-frontend-mentor.svg";
import "./NameNSocials.css";

export const NameNSocialLinks = () => {
  return (
    <div className="nameNSocialLinks">
      <div className="name">
        <h4>adamKeyes</h4>
      </div>
      <div className="socials">
        <img src={github} alt="github" />
        <img src={frontendmentor} alt="frontend mentor" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  );
};
