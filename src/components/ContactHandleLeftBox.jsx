import React from 'react'
import ContactHandles from "./ContactHandles";

const ContactHandleLeftBox = () => {
  return (
    <div className="left">
      <ContactHandles
        classInfo="uil uil-phone-volume"
        about="Free To Call Me"
        contact="(+91) 6378262557"
      />
      <ContactHandles
        classInfo="uil uil-envelope"
        about="Email Me"
        contact="sourabhmanawat@gmail.com"
      />
      <ContactHandles
        classInfo="uil uil-map-marker"
        about="Find Me"
        contact="Udaipur,Rajasthan"
      />
    </div>
  );
}

export default ContactHandleLeftBox;