import React from 'react'

const ContactBox = ({ classDetail, medium ,detail}) => {
  return (
    <li>
      <i className={classDetail}></i>
      <strong>{medium} : </strong> {detail}
    </li>
  );
}

export default ContactBox;