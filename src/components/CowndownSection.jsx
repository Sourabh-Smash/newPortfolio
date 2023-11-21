import React from "react";
import CounterElement from "./CounterElement";

const CowndownSection = () => {
  return (
    <section className="counter_wrapper">
      <CounterElement
        classProperty="uil uil-cell"
        dataVal="1500"
        elem="+"
        info="Completed Projects"
      />
      <CounterElement
        classProperty="uil uil-smile"
        dataVal="1600"
        elem="K"
        info="Happy Clients"
      />
      <CounterElement
        classProperty="uil uil-trophy"
        dataVal="21"
        elem="+"
        info="Awards Received"
      />
    </section>
  );
};

export default CowndownSection;
