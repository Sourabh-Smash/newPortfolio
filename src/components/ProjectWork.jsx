import React from "react";
import TechHeadings from "./TechHeadings";
import SliderComp from "./SliderComp";

const ProjectWork = () => {
  return (
    <section className="work">
      <h1 className="section_heading">My Work & Review</h1>
      <div className="wrapper">
        <SliderComp/>
        <div className="portfolio">
          <TechHeadings />
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
