import React from 'react'

const SocialHandlesBox = ({classDetail,link}) => {
  return (
    <li>
      <a href={link} target='_blank'>
        <i className={classDetail}></i>
      </a>
    </li>
  );
}

export default SocialHandlesBox;