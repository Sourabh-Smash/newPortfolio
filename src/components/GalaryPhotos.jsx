import React from 'react'
import ProjectImgs from "./ProjectImgs";
import img from "../images/tree.jpg";

const GalaryPhotos = () => {
    console.log(img);
    const images = [
        {
            info: "frontend",
            foo:"../images/tree.jpg",
        }
    ]
    // const imgUrl = "../images/tree.jpg";
  return (
    <div className="portfolio_wrapper">
      <ProjectImgs classinfo="item design" img={img} />
      <ProjectImgs classinfo="item frontend" img={img} />
      <ProjectImgs classinfo="item backend" img={img} />
      <ProjectImgs classinfo="item backend" img={img} />
    </div>
  );
}

export default GalaryPhotos;