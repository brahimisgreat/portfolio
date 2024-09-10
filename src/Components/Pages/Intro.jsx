import React from "react";
import pic from "../../assets/images/picofme.jpg";
import { Link } from "react-router-dom";
import "./intro.css";



export const Intro = () => {
  return (
    <main className="intro flex flex-col items-center mt-10 gap-16">
      <section className="image-container">
        <img src={pic} alt="profile" className="w-52 rounded-full h-72" />
      </section>

      <article className="info flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-center">
          Nice to meet you! I&apos;m <span className="name" >Brahim Coulibaly</span>
        </h1>
        <p className="text-center">
            Based in the US, i&apos;m a front-end developer passionate about building beautiful, responsive,
             and accesible web apps that users love
        </p>
        <Link to='/projects' className='btn bg-emerald-600 text-white px-4 py-2 rounded-md'>Contact me</Link>
      </article>
    </main>
  );
};
