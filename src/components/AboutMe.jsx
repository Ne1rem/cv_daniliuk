import React from "react";
import "../styles/AboutMe.css";
import me from "../assets/images/me.jpg";

import HTML from "../assets/images/techn/html.svg";
import CSS from "../assets/images/techn/css.svg";
import ReactLogo from "../assets/images/techn/react.svg";
import NextJs from "../assets/images/techn/nextjs.svg";
import Tailwind from "../assets/images/techn/tailwind.svg";
import Typescript from "../assets/images/techn/typescript.svg";

function AboutMe() {
  return (
    <section id="about" className="container">
      <h1 className="TitleAbout">About me</h1>
      <div className="divText">
        <img src={me} alt="Me" className="MeImage" width={100} height={100} />
        <div className="textPart">
          <h2 className="MyName">Anatoliy Daniliuk</h2>
          <p>
            I am a frontend developer with experience in Next.js, Tailwind CSS,
            and React. I have experience in commercial projects and have been
            studying programming for more than 1.5 years. My goal is to become a
            highly qualified frontend developer, so I work on my professional
            development every day.
          </p>
          <div>
            <h3 className="hardSkillsAbout">Hard skills</h3>
            <ul className="skillsTechn">
              <li className="skil">
                HTML/CSS
                <img src={HTML} alt="HTML logo" className="techLogo" />
                <img src={CSS} alt="CSS logo" className="techLogo" />
              </li>
              <li className="skil">
                React
                <img src={ReactLogo} alt="React logo" className="techLogo" />
              </li>
              <li className="skil">
                Next.js
                <img src={NextJs} alt="Next.js logo" className="techLogo" />
              </li>
              <li className="skil">
                Tailwind, SCSS
                <img src={Tailwind} alt="Tailwind logo" className="techLogo" />
              </li>
              <li className="skil">
                Typescript
                <img
                  src={Typescript}
                  alt="Typescript logo"
                  className="techLogo"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
