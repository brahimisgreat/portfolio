import './GithubProject.css';

export const GithubProject = ({data}) => {
  return (
    <div className="githubProject">
      <img src={''} alt="github image" />
      <h5></h5>
      <div>
        <span>HTML</span> <span>CSS</span>
      </div>
      <div className="codeButtons">
        <button>VIEW PROJECT</button>
        <button>VIEW CODE </button>
      </div>
    </div>
  );
};
