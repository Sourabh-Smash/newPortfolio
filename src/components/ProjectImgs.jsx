import React from "react";

const ProjectImgs = ({ prevent, img }) => {
  return (
    <div className="item">
      <div className="links">
        <a href="#" onClick={(e) => prevent(e)}>
          GitHub Link
        </a>
        <a href="#" onClick={(e) => prevent(e)}>
          Live Project
        </a>
      </div>
      <a href="#" onClick={(e) => prevent(e)}>
        <img src={img} alt="" />
      </a>
    </div>
  );
};

export default ProjectImgs;
