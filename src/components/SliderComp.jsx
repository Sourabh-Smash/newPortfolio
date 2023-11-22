import React, { useEffect, useRef, useState } from "react";
import SliderContent from "./SliderContent";

const SliderComp = () => {
  const targetRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const sliderContent = [
    {
      words:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut ullam  vitae? Reiciendis nisi nulla, molestias numquam perspiciatis officia ",
      url: "/src/images/img1.jpg",
      nameIs: "-Sourabh Manawat",
      company: "CEO Facebook",
    },
    {
      words:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut ullam  vitae? Reiciendis nisi nulla, molestias numquam perspiciatis officia ",
      url: "/src/images/img2.jpg",
      nameIs: "-Sourabh holo",
      company: "CEO MS",
    },
    {
      words:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut ullam  vitae? Reiciendis nisi nulla, molestias numquam perspiciatis officia ",
      url: "/src/images/img3.jpg",
      nameIs: "-Ajay Manawat",
      company: "CEO Apple",
    },
    {
      words:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut ullam  vitae? Reiciendis nisi nulla, molestias numquam perspiciatis officia ",
      url: "/src/images/img4.jpg",
      nameIs: "-Gautham Suthar",
      company: "CEO Vevar",
    },
  ];
  const options = {
    rootMargin: "0px 0px -150px 0px",
  };
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("in view");

          intervalRef.current = setInterval(() => {
            const nextIdx = currentIdx === sliderContent.length - 1;
            const newIdx = nextIdx ? 0 : currentIdx + 1;
            setCurrentIdx(newIdx);
          }, 5000);

          const clearObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                clearInterval(intervalRef.current);
              }
            });
          }, options);
          clearObserver.observe(targetRef.current);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [currentIdx]);
  return (
    <div ref={targetRef} className="slider_wrapper">
      <SliderContent
        quote={sliderContent[currentIdx].words}
        img={sliderContent[currentIdx].url}
        name={sliderContent[currentIdx].nameIs}
        company={sliderContent[currentIdx].company}
      />
    </div>
  );
};

export default SliderComp;
