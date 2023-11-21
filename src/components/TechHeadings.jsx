import React, { useState } from "react";
import ProjectTech from "./ProjectTech";
import GalaryPhotos from "./GalaryPhotos";

const TechHeadings = () => {
  const [activeTech, setActive] = useState("*");
  const handleTechClick = (dataProp) => {
    setActive(dataProp);
  };
  return (
    <>
      <div className="tabs">
        <ul>
          <ProjectTech
            isActive={activeTech === "*"}
            onClick={() => handleTechClick("*")}
            dataProp="*"
            tech="All"
          />
          <ProjectTech
            isActive={activeTech === ".design"}
            onClick={() => handleTechClick(".design")}
            dataProp=".design"
            tech="UI/UX Design"
          />
          <ProjectTech
            isActive={activeTech === ".frontend"}
            onClick={() => handleTechClick(".frontend")}
            dataProp=".frontend"
            tech="FrontEnd"
          />
          <ProjectTech
            isActive={activeTech === ".backend"}
            onClick={() => handleTechClick(".backend")}
            dataProp=".backend"
            tech="BackEnd"
          />
        </ul>
      </div>
      <GalaryPhotos currentTech={activeTech } />
    </>
  );
};

export default TechHeadings;
