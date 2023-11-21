import React from "react";
import ProjectImgs from "./ProjectImgs";

const GalaryPhotos = ({ currentTech }) => {
  const images = [
    {
      info: ".frontend",
      foo: "/src/images/img1.jpg",
      id: 1,
    },
    {
      info: ".backend",
      foo: "/src/images/tree.jpg",
      id: 2,
    },
    {
      info: ".backend",
      foo: "/src/images/img2.jpg",
      id: 3,
    },
    {
      info: ".frontend",
      foo: "/src/images/img3.jpg",
      id: 4,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 5,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 6,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 7,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 8,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 9,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 10,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 11,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 12,
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 13,
    },
  ];
  return (
    <div className="portfolio_wrapper">
      {images.map((item) => {
        if (currentTech === "*") {
          return <ProjectImgs key={item.id} classinfo="item" img={item.foo} />;
        }  if (item.info === currentTech) {
          return <ProjectImgs key={item.id} classinfo="item" img={item.foo} />;
        }
      })}
    </div>
  );
};

export default GalaryPhotos;
