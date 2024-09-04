import React from "react";
import { assets } from "../../assets/assets";

export const ResultSection = ({ recentPrompt, loading, resultData }) => {
  const { user_icon, gemini_icon } = assets;

  return (
    <div className="result">
      <div className="result-title">
        <img src={user_icon} alt="User Icon" />
        <p>{recentPrompt}</p>
      </div>
      <div className="result-data">
        <img src={gemini_icon} alt="Gemini Icon" />
        {loading ? (
          <div className="loader">
            Loading...
            <hr />
            <hr />
            <hr />
          </div>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
        )}
      </div>
    </div>
  );
};
