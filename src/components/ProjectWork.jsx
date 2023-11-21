import React from "react";
import img from "../images/tree.jpg";
import ProjectTech from "./ProjectTech";
import ProjectImgs from "./ProjectImgs";
import TechHeadings from "./TechHeadings";
import GalaryPhotos from "./GalaryPhotos";

const ProjectWork = () => {
  return (
    <section className="work">
      <h1 className="section_heading">My Work & Review</h1>
      <div className="wrapper">
        <div className="slider">slider</div>
        <div className="portfolio">
         
          <TechHeadings />
          {/* <div className="portfolio_wrapper">
            <ProjectImgs classinfo="item design" img={img} />
            <ProjectImgs classinfo="item frontend" img={img} />
            <ProjectImgs classinfo="item backend" img={img} />
            <ProjectImgs classinfo="item backend" img={img} />
          </div> */}
          {/* <GalaryPhotos/> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
