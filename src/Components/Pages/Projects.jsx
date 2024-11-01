import { data } from "../../data";
import ProjectCard from "../../Components/Features/ProjectCard";
import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects py-12  ">
    
      <div className="flex   items-center  justify-between mb-10">
        <h1 className="text-4xl font-bold md:text-7xl">Projects</h1>
        <Link hrefLang="#contact" className="tracking-wider border-b-4 border-emerald-600 h-9">CONTACT ME</Link>
      </div>
      <div className="bob">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          images={item.image}
          skills={item.skills}
          name={item.name}
          gitrepo={item.gitrepo}
          website={item.website}
        />
      ))}
      </div>
    </div>
  );
}
