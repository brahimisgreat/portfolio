import "./GithubProject.css";
import { useState } from "react";

export const GithubProject = ({ data }) => {


  const [hover, setHover] = useState(false);

  return (
    <div className="githubProject">
      <div className="img-container">
        <img src={data.image} alt="github image" />
      </div>
      <h5>{data.name}</h5>
      <div className="program-skills">
        <span>{data.skills[0]}</span> <span>{data.skills[1]}</span>{" "}
        <span>{data.skills[2]}</span>
      </div>
      <div className="codeButtons">
        <button>VIEW PROJECT</button>
        <button>VIEW CODE </button>
      </div>
    </div>
  );
};
