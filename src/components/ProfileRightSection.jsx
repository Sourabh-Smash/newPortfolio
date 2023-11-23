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
          link="https://www.linkedin.com/in/sourabh-menaria-0525571a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          classDetail="uil uil-linkedin"
        />
        <SocialHandlesBox
          link="https://www.linkedin.com/in/sourabh-menaria-0525571a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          classDetail="uil uil-twitter"
        />
      </ul>
    </div>
  );
};

export default ProfileRightSection;
