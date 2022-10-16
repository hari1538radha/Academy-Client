import React from "react";
import './UniversityCard.css'

function UniversityCard({uniInfo}) {
  return (
    <div className="uni-card-container">
      <div className="uni-img-container">
        <img src={uniInfo.Image}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
            <a href={uniInfo.url} target="_blank">{uniInfo.Name_1}</a>
        </div>
        <div className="uni-place-container">
          <span className="uni-district">{uniInfo.District}</span>
          <span className="uni-state">{uniInfo.State}</span>
        </div>
        <div className="uni-rank-container">
          <span className="uni-rank-1"></span>
          <span className="uni-rant-2"></span>
        </div>
        <div className="uni-description"></div>
      </div>
      <div className="uni-stats-container">
        <div className="uni-stat-title"></div>
        <div className="uni-stat-value"></div>
      </div>
    </div>
  );
}

export default UniversityCard;
