import React from 'react'

const EducationHeading = ({logoClass , info}) => {
  return (
    <div className="heading">
      <i className={logoClass}></i>
      <h5>{info}</h5>
    </div>
  );
}

export default EducationHeading;