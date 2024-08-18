import { NameNSocialLinks } from "./NameNSocialLinks";
import pic from "../../assets/images/pic.webp";
import { Main } from "./Main";
import "./Header.css";
import backImg from "../../assets/images/pattern-rings.svg";
import pic2 from '../../assets/images/image-profile-tablet.webp'
import circle from '../../assets/images/pattern-circle.svg'

export const Header = () => {
  return (
    <>
      <header className="header">
        <NameNSocialLinks />
        <div className="profilePic">
          <img src={pic} alt="profile picture" className="pic1" />
          <img src={pic2} alt="profile picture" className="pic2" />
        </div>
        <Main />
      <img src={backImg} alt="background decoration image" className="backImg" />
      <img src={circle} alt="background decoration image" className="circleB" />
      </header>
    </>
  );
};
