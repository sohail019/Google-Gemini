import React from "react";

export const Card = ({ text, icon, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <p>{text}</p>
      <div className="icon">{icon}</div>
    </div>
  );
};
