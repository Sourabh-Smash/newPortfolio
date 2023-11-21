import React from "react";

const EducationDetail = ({ year, field, standard }) => {
  return (
    <div className="item">
      <p>{year}</p>
      <p className="center">{standard}</p>
      <p>{field}</p>
    </div>
  );
};

export default EducationDetail;
