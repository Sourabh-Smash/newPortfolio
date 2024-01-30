import React from "react";
import TechHeadings from "./TechHeadings";
import SliderComp from "./SliderComp";
import ProjectContainer from "./ProjectContainer";
import oneImg from "../images/YT.png";
import YTclone from "./projectBox/YTclone"
import RealEstate from "./projectBox/RealEstate"
import Zomato from "./projectBox/Zomato"
import Swiggy from "./projectBox/Swiggy"
const ProjectWork = () => {
  // const projectDetails = [
  //   {
  //     name: "YouTube Clone",
  //     desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
  //       voluptatum, nemo ipsam eum porro error sapiente deleniti rerum
  //       blanditiis reiciendis.`,
  //     imgScr: oneImg,
  //     tech: ["React Js", "TailWind CSS", "Redux Tookit"],
  //     links: [
  //       {
  //         gitHub: "https://github.com/Sourabh-Smash",
  //         web: "https://github.com/Sourabh-Smash",
  //       },
  //     ],
  //   },
  // ];
  return (
    <section className="work">
      <h1 className="section_heading">My Work & Review</h1>
      <div className="wrapper">
        {/* <SliderComp/>
        <div className="portfolio">
          <TechHeadings />
        </div> */}
        {/* <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer /> */}
        <YTclone />
        <RealEstate />
        <Zomato />
        <Swiggy/>
      </div>
    </section>
  );
};

export default ProjectWork;
