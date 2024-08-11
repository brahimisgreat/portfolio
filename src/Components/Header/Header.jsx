import { NameNSocialLinks } from "./NameNSocialLinks";
import pic from "../../assets/images/pic.webp";
import { Main } from "./Main";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <NameNSocialLinks />
      <div className="profilePic">
        <img src={pic} alt="profile picture" />
      </div>
      <Main />
    </header>
  );
};
