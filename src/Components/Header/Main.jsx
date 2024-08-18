import "./Main.css";

export const Main = () => {
  return (
    <main className="headerMain">
      <h3 className="h3-1">Nice to meet you! i&apos;m <span>Adam Keyes.</span></h3>
      <h3 className="h3-2">Nice to<br/> meet you! i&apos;m <span>Adam Keyes.</span></h3>
      <p>
        Based in the UK, I&apos;m a front-end developer passionate about
        building accessible web apps that users love.
      </p>
      <div className="contactMe">
        <button>CONTACT ME</button>
        <div className="line" />
      </div>
    </main>
  );
};
