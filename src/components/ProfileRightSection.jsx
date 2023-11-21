import React from 'react'
import ContactBox from './ContactBox';
import SocialHandlesBox from './SocialHandlesBox';

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
        <SocialHandlesBox classDetail="uil uil-github" />
        <SocialHandlesBox classDetail="uil uil-twitter" />
        <SocialHandlesBox classDetail="uil uil-linkedin" />
      </ul>
    </div>
  );
}

export default ProfileRightSection;