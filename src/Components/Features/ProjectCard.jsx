import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({
  images,
  skills,
  name,
  gitrepo,
  website,
}) {
  const allSkills = skills;

  return (
    <div className="pjc relative mb-12">
      <div className="relative">
        <div className="overlay hidden absolute  items-center justify-center lg:flex lg:flex-col lg:gap-2 lg:z-0">
        <Link className="btn lg:relative lg:z-10 lg:opacity-100 border-b-4 border-emerald-600" to={website}>VIEW PROJECT</Link>
        <Link className="btn border-b-4 border-emerald-600" to={gitrepo}> VIEW CODE</Link>
        </div>
        <img src={images} alt="image of projects" />
      </div>

      <div className="mt-4">
        <h1 className="text-2xl">{name}</h1>
        <div className="flex gap-4 text-gray-300 mt-3">
          {allSkills.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
      <div className="buttons flex gap-6 mt-4 h-9 lg:hidden  ">
        <Link className=" border-b-4 border-emerald-600">VIEW PROJECT</Link>
        <Link className="border-b-4 border-emerald-600"> VIEW CODE</Link>
      </div>
    </div>
  );
}
