import React from "react";
import PersonalDetailInfo from "./PersonalDetailInfo";

const PersonalDetails = () => {
  return (
    <section className="about">
      <h1 className="section_heading">ABOUT US!</h1>
      <div className="content">
        <div className="left">
          <h2>Im Sourabh Manawat</h2>
          <p>
            an aspiring software developer and dedicated student, is fueled by a
            profound passion for software development. Eager to explore and
            master various coding languages, Sourabh seeks to create impactful
            and innovative solutions. With a commitment to continuous learning,
            he aspires to contribute meaningfully to the dynamic and
            ever-evolving field of technology.
          </p>
          <button>Download CV</button>
        </div>
        <div className="right">
          <PersonalDetailInfo info1="Name" info2="Sourabh Manawat" />
          <PersonalDetailInfo info1="Date Of Birth" info2="28 May 2000" />
          <PersonalDetailInfo info1="Spoken Language" info2="Hindi - English" />
          <PersonalDetailInfo info1="Nationality" info2="Bharat" />
          <PersonalDetailInfo info1="Interest" info2="Music, Reading, Travel" />
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
