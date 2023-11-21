import React, { useState } from "react";
import EducationWrapper from "./EducationWrapper";
import EducationHeading from "./EducationHeading";
import SkillBox from "./SkillBox";

const PersonalSkillsExperience = () => {  
  return (
    <section className="skills">
      <h1 className="section_heading">Education & Skills</h1>
      <div className="content">
        <div className="left">
          <div className="inner_left">
            <EducationHeading
              logoClass="uil uil-graduation-cap"
              info="Education"
            />
            <EducationWrapper />
          </div>
          <div className="inner_right">
            <EducationHeading
              logoClass="uil uil-suitcase-alt"
              info="Experience"
            />
            <EducationWrapper />
          </div>
        </div>
        <div className="right">
          <div className="skills_wrapper">
            <SkillBox skill="React" dataAttr="80" level="80" />
            <SkillBox skill="HTML & CSS3" dataAttr="78" level="78" />
            <SkillBox
              skill="Data Structure & Algorithms"
              dataAttr="60"
              level="60"
            />
            <SkillBox skill="JavaScript" dataAttr="70" level="70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSkillsExperience;
