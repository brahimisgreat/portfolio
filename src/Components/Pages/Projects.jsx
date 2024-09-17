import React from "react";
import { data } from "../../data";
import ProjectCard from "../../Components/Features/ProjectCard";

export default function Projects() {
  return (
    <div className="Projects py-20 ">
      <div className="flex   items-center  justify-between mb-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <button className="tracking-wider border-b-4 border-emerald-600 h-9">CONTACT ME</button>
      </div>
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          images={item.image}
          skills={item.skills}
          name={item.name}
        />
      ))}
    </div>
  );
}
