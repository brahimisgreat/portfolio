import { NameNSocialLinks } from "./NameNSocialLinks";
import pic from "../../assets/images/pic.webp";
import { Main } from "./Main";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <NameNSocialLinks />
      <div className="profilePic">
        <img src={pic} alt="profile picture" />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};
