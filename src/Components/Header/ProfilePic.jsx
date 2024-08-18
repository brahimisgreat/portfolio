import './profilePic.css'
import pic2 from '../../assets/images/image-profile-tablet.webp'
import pic from "../../assets/images/pic.webp";


export const ProfilePic = () => {
  return (
    <div className='profilepic'>
          <img src={pic} alt="profile picture" className="pic1" />
          <img src={pic2} alt="profile picture" className="pic2" />
    </div>
  )
}
