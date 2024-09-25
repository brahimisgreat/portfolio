import React from "react";
import { data } from "../../data";
import ProjectCard from "../../Components/Features/ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects py-12  ">
      <div className="flex   items-center  justify-between mb-10">
        <h1 className="text-4xl font-bold md:text-7xl">Projects</h1>
        <button className="tracking-wider border-b-4 border-emerald-600 h-9">CONTACT ME</button>
      </div>
      <div className="bob">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          images={item.image}
          skills={item.skills}
          name={item.name}
        />
      ))}
      </div>
    </div>
  );
}
