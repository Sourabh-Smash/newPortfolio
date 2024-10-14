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
            <div className="timeline_wrapper">
              <div className="item">
                <p>Nov 2023 - Oct 2024</p>
                <p className="center">RightShift Technologies</p>
                <p>Software Developer Engineer - 1</p>
              </div>
            </div>
            {/* <EducationWrapper /> */}
          </div>
        </div>
        <div className="right">
          <div className="skills_wrapper">
            <SkillBox
              skill="JavaScript"
              dataAttr="80"
              level="80"
            />
            <SkillBox skill="C++" dataAttr="78" level="78" />
            <SkillBox
              skill="DSA"
              dataAttr="70"
              level="70"
            />
            <SkillBox skill="React / Next JS" dataAttr="90" level="90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSkillsExperience;
