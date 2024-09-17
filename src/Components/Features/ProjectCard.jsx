import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { ImInsertTemplate } from "react-icons/im";

export default function ProjectCard({
  images,
  skills,
  name,
  gitrepo,
  website,
}) {

const allSkills = skills
let bob= allSkills.map((ear) => {
  return (ear)
})



  console.log(bob)
  return (
    <div className="mb-12">
      <img src={images} alt="image of projects" />
      <div className="mt-4">
        <h1 className="text-2xl" >{name}</h1>
        <div className="flex gap-4 text-gray-300 mt-3">
          {
            allSkills.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              )
            })
          }
        </div>
      </div>
      <div className="flex gap-6 mt-4 h-9">
        <Link className="border-b-4 border-emerald-600">VIEW PROJECT</Link>
        <Link className="border-b-4 border-emerald-600" >  VIEW CODE</Link>
      </div>
    </div>
  );
}
