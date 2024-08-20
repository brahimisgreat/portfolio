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
      </header>
    </>
  );
};
