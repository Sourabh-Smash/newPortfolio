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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quam
            exercitationem illo vero, consequuntur ullam recusandae dolores
            aliquam laudantium magni dolorum nulla impedit at cupiditate quasi!
            Distinctio dolores est in.
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
