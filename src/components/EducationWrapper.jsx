import React from 'react'
import EducationDetail from "./EducationDetail";


const EducationWrapper = () => {
  return (
    <div className="timeline_wrapper">
      <EducationDetail
        year="2000-2004"
        standard="HighSchool"
        field="Bacholer in Computer & Science"
      />
      <EducationDetail
        year="2000-2004"
        standard="HighSchool"
        field="Bacholer in Computer & Science"
      />
      <EducationDetail
        year="2000-2004"
        standard="HighSchool"
        field="Bacholer in Computer & Science"
      />
    </div>
  );
}

export default EducationWrapper;