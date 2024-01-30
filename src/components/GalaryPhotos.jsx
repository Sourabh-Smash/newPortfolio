import React from "react";
import ProjectImgs from "./ProjectImgs";
import projImg1 from "../images/realEstate.png"
import projImg2 from "../images/zomato.png";
import projImg3 from "../images/tree.jpg";
import projImg4 from "../images/img2.jpg";
import projImg5 from "../images/YT.png";


const GalaryPhotos = ({ currentTech }) => {
  const images = [
    {
      info: ".frontend",
      foo: [projImg1],
      id: 1,
      gitHub: "https://github.com/Sourabh-Smash/Real_Estate",
      netlify: "https://dulcet-elf-a00b7b.netlify.app",
    },
    {
      info: ".backend",
      foo: [projImg3],
      id: 2,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".backend",
      foo: [projImg4],
      id: 3,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".frontend",
      foo: [projImg2],
      id: 4,
      gitHub: "https://github.com/Sourabh-Smash/Zomato_Clone",
      netlify: "https://gregarious-capybara-d3e182.netlify.app",
    },
    {
      info: ".frontend",
      foo: [projImg5],
      id: 5,
      gitHub: "https://github.com/Sourabh-Smash/YT-clone",
      netlify: "1",
    },
    {
      info: ".design",
      foo: [projImg4],
      id: 6,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".design",
      foo: [projImg4],
      id: 7,
      gitHub: "1",
      netlify: "1",
    },
    // {
    //   info: ".design",
    //   foo: [projImg4],
    //   id: 8,
    //   gitHub: "1",
    //   netlify: "1",
    // },
    // {
    //   info: ".design",
    //   foo: "/src/images/img4.jpg",
    //   id: 9,
    // },
    // {
    //   info: ".design",
    //   foo: "/src/images/img4.jpg",
    //   id: 10,
    // },
    // {
    //   info: ".design",
    //   foo: "/src/images/img4.jpg",
    //   id: 11,
    // },
    // {
    //   info: ".design",
    //   foo: "/src/images/img4.jpg",
    //   id: 12,
    // },
    // {
    //   info: ".design",
    //   foo: "/src/images/img4.jpg",
    //   id: 13,
    // },
  ];

  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="portfolio_wrapper">
      {images.map((item) => {
        if (currentTech === "*") {
          return (
            <ProjectImgs
              key={item.id}
              gitLink={item.gitHub}
              netlify={item.netlify}
              prevent={prevent}
              img={item.foo}
            />
          );
        }
        if (item.info === currentTech) {
          return (
            <ProjectImgs
              gitLink={item.gitHub}
              netlify={item.netlify}
              key={item.id}
              prevent={prevent}
              img={item.foo}
            />
          );
        }
      })}
    </div>
  );
};

export default GalaryPhotos;
