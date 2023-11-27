import React from "react";
import ProjectImgs from "./ProjectImgs";

const GalaryPhotos = ({ currentTech }) => {
  const images = [
    {
      info: ".frontend",
      foo: "/src/images/realEstate.png",
      id: 1,
      gitHub: "https://github.com/Sourabh-Smash/Real_Estate",
      netlify: "https://dulcet-elf-a00b7b.netlify.app",
    },
    {
      info: ".backend",
      foo: "/src/images/tree.jpg",
      id: 2,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".backend",
      foo: "/src/images/img2.jpg",
      id: 3,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".frontend",
      foo: "/src/images/zomato.png",
      id: 4,
      gitHub: "https://github.com/Sourabh-Smash/Zomato_Clone",
      netlify: "https://gregarious-capybara-d3e182.netlify.app",
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 5,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 6,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 7,
      gitHub: "1",
      netlify: "1",
    },
    {
      info: ".design",
      foo: "/src/images/img4.jpg",
      id: 8,
      gitHub: "1",
      netlify: "1",
    },
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
