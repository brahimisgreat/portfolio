import pic from "../../assets/images/picofme.jpg";
import "./intro.css";
import rings from '../../assets/images/pattern-rings.svg'
import circle from '../../assets/images/pattern-circle.svg'
import brah from '../../assets/images/bigbrah.png'



export const Intro = () => {

  return (
    <>
    <img src={circle} className="circle absolute " />
    <img src={rings} className="rings absolute  " />

    <main className="main intro flex flex-col items-center mt-10 gap-6 md:flex-row md:relative md:top-14  ">
      <section className=" image-container md:order-2 md:absolute md:left-3/4">
        <img  src={brah} alt="profile" id="img" className="picofme w-52  h-72 md:w-70 md:h-80 lg:w-80 lg:h-96 " />
      </section>

      <article className="info flex flex-col items-center gap-8 md:items-start md:relative md:left-10 md:gap-10 md:w-8/12 lg:left-0">
        <h1 className="title text-3xl font-bold text-center md:text-7xl md:text-left   ">
          Nice to meet you! I&apos;m <span className="name md:block lg:inline-block" >Brahim Coulibaly</span>
        </h1>
        <p className="text-center md:text-left md:text-2xl lg:w-3/4 lg:text-gray-300">
            Based in the US, i&apos;m a front-end developer passionate about building beautiful, responsive,
             and accesible websites and web apps that users love
        </p>
        <a  href='#contact' className='c-button text-white   tracking-wider h-10 text-2xl font-medium'>CONTACT ME</a>
        
      </article>
    </main>
    </>
  );
};
