import React from "react";

const ProjectImgs = ({ prevent, img, gitLink, netlify }) => {
  return (
    <div className="item">
      <div className="links">
        <a href={gitLink} target="_blank">GitHub Link</a>
        <a href={netlify} target="_blank">Live Project</a>
      </div>
      <a href="#" onClick={(e) => prevent(e)}>
        <img src={img} alt="" />
      </a>
    </div>
  );
};

export default ProjectImgs;
