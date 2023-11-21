import React, { useEffect, useState, useRef } from "react";

const CounterElement = ({ elem, info, dataVal, classProperty }) => {
  const [counter, setCounter] = useState(0);

  const targetRef = useRef(null);
    let options = {
      rootMargin: '0px 0px -150px 0px'
    }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("in view");

          let step = +dataVal / 100;
          const interval = setInterval(() => {
            let val = +dataVal;
            setCounter((prevCounter) => {
              // Use the functional form to update counter based on the previous value
              if (prevCounter < val) {
                return prevCounter + Math.ceil(step);
              } else {
                clearInterval(interval);
                return prevCounter;
              }
            });
          }, 2);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [counter]);

  return (
    <div ref={targetRef}>
      <div>
        <i className={classProperty}></i>
      </div>
      <div>
        <h3>
          <span className="counter" data-count={dataVal}>
            {counter}
          </span>
          {elem}
        </h3>
        <h5>{info}</h5>
      </div>
    </div>
  );
};

export default CounterElement;
