import React from "react";
import oneImg from "../../images/foodImg.png";
import SocialHandlesBox from "../SocialHandlesBox";
import { TbWorldWww } from "react-icons/tb";
const ProjectContainer = () => {
  return (
    <div className="mainBox">
      <img src={oneImg} alt="projectImg" className="prjImg" />
      <h1 className="prjName">Food Ordering App</h1>
      <p className="prjDes">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        voluptatum, nemo ipsam eum porro error sapiente deleniti rerum
        blanditiis reiciendis.
      </p>
      <ul className="techUsed">
        <li className="techLink">React Js</li>
        <li className="techLink">Tailwind CSS</li>
        <li className="techLink">React Rounter</li>
      </ul>
      <ul className="socials">
        <SocialHandlesBox
          link="https://github.com/Sourabh-Smash/namaste-react-demo"
          classDetail="uil uil-github"
        />
        <li>
          <a
            href={"https://earnest-sable-288eb2.netlify.app"}
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
