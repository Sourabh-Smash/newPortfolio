import React from 'react'

const SocialHandlesBox = ({classDetail}) => {
  return (
    <li>
      <a href="#">
        <i className={classDetail}></i>
      </a>
    </li>
  );
}

export default SocialHandlesBox;