import React from "react";

const SliderContent = ({ quote, img, name, company }) => {
  return (
    <>
      <div className="icon_wrap">
        <i className="uil uil-feedback"></i>
      </div>
      <div className="slider">
        <div className="slide">
          <p>
            {quote}
          </p>
          <div>
            <img src={img} alt="hello" />
          </div>
          <h2>{name}</h2>
          <h6>{company}</h6>
        </div>
      </div>
    </>
  );
};

export default SliderContent;
