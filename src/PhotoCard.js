import React from "react";
import "./PhotoCard.css";

function PhotoCard({ title, color, dimensions }) {
  return (
    <div className="outer-box">
      <div className="inner-box" style={{ backgroundColor: color }}>
        <p className="dimensions">{dimensions}</p>
      </div>
      <p className="title">{title}</p>
    </div>
  );
}

export default PhotoCard;


