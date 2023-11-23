import React from 'react'
import EducationDetail from "./EducationDetail";


const EducationWrapper = () => {
  return (
    <div className="timeline_wrapper">
      <EducationDetail
        year="2020-2024"
        standard="Bacholer's Degree"
        field="Bacholer in Computer & Science"
      />
      <EducationDetail
        year="2019-2020"
        standard="HighSchool"
        field="Science & Mathematics"
      />
    </div>
  );
}

export default EducationWrapper;