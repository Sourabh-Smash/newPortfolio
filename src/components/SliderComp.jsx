import React, { useEffect, useRef, useState } from "react";
import SliderContent from "./SliderContent";

const SliderComp = () => {
  const targetRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const sliderContent = [
    {
      words: `"Real programmers can write assembly code in any language."`,
      url: "/src/images/1.jpg",
      nameIs: "- Larry Wall",
      company: "Perl Language Creator",
    },
    {
      words:
        " Good programmers use their brains, but good guidelines save us having to think out every case.",
      url: "/src/images/2.jpeg",
      nameIs: "-Francis Glassborow",
      company: "Chairman of ACCU",
    },
    {
      words: " Software is like sex: it’s better when it’s free",
      url: "/src/images/3.jpg",
      nameIs: "- Linus Torvalds",
      company: "Creator of Linux OS",
    },
    {
      words:
        " I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12. ",
      url: "/src/images/4.jpg",
      nameIs: "-Elon Musk",
      company: "CEO Tesla & SpaceX",
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
