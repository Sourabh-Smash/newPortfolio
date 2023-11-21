import React from "react";

const SkillBox = ({ skill, dataAttr, level }) => {
  return (
    <div className="skill-box">
      <h4>{skill}</h4>
      <div className="progress-wrap">
        <span style={{width:`${level}%`}} data-percent={dataAttr} className="progress-bar2">
          <span className="tooltip">{level}</span>
        </span>
      </div>
    </div>
  );
};

export default SkillBox;
