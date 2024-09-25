import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills  md:mt-36 lg:w-full ">
      <div className="baby flex flex-col flex-wrap gap-10  ">
        <div className="languages-container">
          <h1 className="">HTML/CSS</h1>
          <p>3 Years Experience</p>
        </div>
        <div className="languages-container md:text-center">
          <h1>JavaScript</h1>
          <p>2 Years Experience</p>
        </div>
        <div className="languages-container">
          <h1>React</h1>
          <p>2 Year Experience</p>
        </div>
       
        <div className="languages-container  text-center">
          <h1>MySQL</h1>
          <p>2 Year Experience</p>
        </div>
        <div className="languages-container">
          <h1>Sass</h1>
          <p>1 Year Experience</p>
        </div>
        <div className="languages-container text-center">
          <h1>TailwindCss</h1>
          <p>1 Year Experience</p>
        </div>
      </div>
    </div>
  );
};
