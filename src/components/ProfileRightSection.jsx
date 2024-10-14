import React from "react";
import ContactBox from "./ContactBox";
import SocialHandlesBox from "./SocialHandlesBox";

const ProfileRightSection = () => {
  return (
    <div className="right">
      <ul className="contact">
        <ContactBox
          classDetail="uil uil-phone-volume"
          medium="Phone"
          detail="+91 6378262557"
        />
        <ContactBox
          classDetail="uil uil-envelope"
          medium="Email"
          detail="sourabhmanawat@gmail.com"
        />
      </ul>

      <ul className="socials">
        <SocialHandlesBox
          link="https://github.com/Sourabh-Smash"
          classDetail="uil uil-github"
        />
        <SocialHandlesBox
          link="https://www.linkedin.com/in/sourabh-manawat-0525571a9/"
          classDetail="uil uil-linkedin"
        />
        <SocialHandlesBox
          link="https://x.com/sourabh_manawat"
          classDetail="uil uil-twitter"
        />
      </ul>
    </div>
  );
};

export default ProfileRightSection;
