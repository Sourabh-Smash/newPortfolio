import React from "react";

const ProjectTech = ({ isActive, dataProp, tech, onClick }) => {
  
  return (
    <li>
      <a
        className={isActive ? "active" : ""}
        href="#"
        data-filter={dataProp}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {tech}
      </a>
    </li>
  );
};

export default ProjectTech;
