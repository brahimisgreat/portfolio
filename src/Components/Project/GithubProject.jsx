import './GithubProject.css';

export const GithubProject = ({data}) => {

console.log({data})
  return (
    <div className="githubProject">
      <img src={data.image} alt="github image" />
      <h5>{data.name}</h5>
      <div className='program-skills'>
        <span>{data.skills[0]}</span> <span>{data.skills[1]}</span> <span>{data.skills[2]}</span>
      </div>
      <div className="codeButtons">
        <button>VIEW PROJECT</button>
        <button>VIEW CODE </button>
      </div>
    </div>
  );
};
