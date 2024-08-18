import { NameNSocialLinks } from "./NameNSocialLinks";
import { Main } from "./Main";
import "./Header.css";
import backImg from "../../assets/images/pattern-rings.svg";
import circle from "../../assets/images/pattern-circle.svg";
import { ProfilePic } from "./ProfilePic";

export const Header = () => {
  return (
    <>
      <header className="header">
        <NameNSocialLinks />
        <ProfilePic />
        <Main />
        <img
          src={backImg}
          alt="background decoration image"
          className="backImg"
        />
        <img
          src={circle}
          alt="background decoration image"
          className="circleB"
        />
      </header>
    </>
  );
};
