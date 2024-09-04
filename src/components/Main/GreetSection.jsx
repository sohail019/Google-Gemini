import React, { useState, useRef } from "react";

export const GreetSection = ({ name, setName, showPrompt, setShowPrompt }) => {
  const usernameRef = useRef(null);

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.name.value;
    setName(username);
    setShowPrompt(false);

    usernameRef.current.classList.add("animate-username");
  };

  return (
    <div className="greet">
      <div>
        {showPrompt && (
          <div className="custom-prompt">
            <p>Enter Your Name</p>
            <form onSubmit={handleNameSubmit}>
              <input type="text" id="name" name="name" required autoFocus />
              <button type="submit">Enter</button>
            </form>
          </div>
        )}
        <span>
          Hello,{" "}
          <span className="username" ref={usernameRef}>
            {name || "Sohail"}
          </span>
        </span>
      </div>
      <p>How Can I Help You Today?</p>
    </div>
  );
};
