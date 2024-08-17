import "./Skills.css";
import skillsBG from "../../assets/images/pattern-rings.svg";

export default function Skills() {
  return (
    <div className="skills">
      <div className="nameOfSkill">
        <h4>HTML</h4>
        <p>4 Years Experience</p>
      </div>
      <div className="nameOfSkill">
        <h4>CSS</h4>
        <p>4 Years Experience</p>
      </div>
      <div className="nameOfSkill">
        <h4>Javascript</h4>
        <p>4 Years Experience</p>
      </div>
      <div className="nameOfSkill">
        <h4>Accessibility</h4>
        <p>4 Years Experience</p>
      </div>
      <div className="nameOfSkill">
        <h4>React</h4>
        <p>3 Years Experience</p>
      </div>
      <div className="nameOfSkill">
        <h4>Sass</h4>
        <p>3 Years Experience</p>
      </div>
      <img src={skillsBG} alt="background decoration image" className="skillsBG" />
    </div>
  );
}
