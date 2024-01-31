import React from "react";
import oneImg from "../../images/realEstate.png";
import SocialHandlesBox from "../SocialHandlesBox";
import { TbWorldWww } from "react-icons/tb";
const ProjectContainer = () => {
  return (
    <div className="mainBox">
      <img src={oneImg} alt="projectImg" className="prjImg" />
      <h1 className="prjName">Real Estate Website </h1>
      <p className="prjDes">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        voluptatum, nemo ipsam eum porro error sapiente deleniti rerum
        blanditiis reiciendis.
      </p>
      <ul className="techUsed">
        <li className="techLink">React Js</li>
        <li className="techLink">Tailwind CSS</li>
        <li className="techLink">React Router</li>
      </ul>
      <ul className="socials">
        <SocialHandlesBox
          link="https://github.com/Sourabh-Smash/Real_Estate"
          classDetail="uil uil-github"
        />
        <li>
          <a
            href={"https://dulcet-elf-a00b7b.netlify.app/"}
            className="btnWeb"
            target="_blank"
          >
            <TbWorldWww className="webBtn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectContainer;
