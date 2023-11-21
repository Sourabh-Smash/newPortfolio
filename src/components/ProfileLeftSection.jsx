import React, { useEffect, useState } from 'react'
import profile from '../images/tree.jpg';

const ProfileLeftSection = () => {
  const skills = ["JavaScript Developer","FrontEnd  Developer","Software  Developer"];
  const [skillidx, setSkillidx] = useState(0);
  useEffect(() => {
    const interval=setInterval(() => {
      setSkillidx((prev) => (prev + 1) % skills.length);
    },2000);
    return () => {
      clearInterval(interval);
    }
  }, [])
  const skill = skills[skillidx];
  // const progressBarWidth = (skill.length / Math.max(...skills.map((s) => s.length))) * 100;
  // const progressBarWidth = (skill.length / skills[0].length) * 100;
  const progressBarWidth = ((Date.now() % 2000) / 2000) * 100;
  return (
    <div className="left">
      <div className="avatar_block">
        <img src={profile} alt="img" />
        <span>
          <i className="uil uil-comment-dots"></i>
        </span>
      </div>
      <div>
        <h2>Sourabh Manawat</h2>
        <p className="cd-headline loading-bar">
          <span className="cd-words-wrapper">
            <b className="is-visible">{skill}</b>
        <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProfileLeftSection;
