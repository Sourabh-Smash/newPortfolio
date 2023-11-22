import React from "react";

const ContactHandles = ({ classInfo, about, contact }) => {
  return (
    <div>
      <div>
        <i className={classInfo}></i>
      </div>
      <div>
        <h4>{about}</h4>
        <span>{contact}</span>
      </div>
    </div>
  );
};

export default ContactHandles;
