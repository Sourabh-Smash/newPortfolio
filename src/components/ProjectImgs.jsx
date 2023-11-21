import React from 'react'


const ProjectImgs = ({ classinfo, img }) => {
  return (
    <div className={classinfo}>
      <a href="#" onClick={(e)=> e.preventDefault()}>
        <img src={img} alt="" />
      </a>
    </div>
  );
}

export default ProjectImgs;