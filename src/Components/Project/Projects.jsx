import { GithubProject } from './GithubProject';
import './Projects.css';
import {data} from '../../data'

export const Projects = () => {

  return (
    <div className="projects">
      <div className="projectsHeader">
        <h4>Projects</h4>
        <button>CONTACT ME</button>
      </div>
      <div className='projects-boxes'>
        {data.map((data, index) => (
          <GithubProject key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
