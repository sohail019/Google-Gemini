import "./Main.css";
import { assets } from "../../assets/assets";
import { useState, useEffect } from "react";

export const Main = () => {
  const [name, setName] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);

  // useEffect(() => {
  //   const username = prompt("Enter your Name")
  //   if(username !== null) setName(username)
  // }, [name]);

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.name.value;
    setName(username);
    setShowPrompt(false);
  };

  const {
    user_icon,
    compass_icon,
    bulb_icon,
    code_icon,
    message_icon,
    gallery_icon,
    mic_icon,
    send_icon,
  } = assets;

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            {showPrompt && (
              <div className="custom-prompt">
                <p>Enter Your Name</p>
                <form onSubmit={handleNameSubmit}>
                  {/* <label htmlFor="name">Enter your Name:</label> */}
                  <input type="text" id="name" name="name" required autoFocus/>
                  <button type="submit">Enter</button>
                </form>
              </div>
            )}
            <span>Hello, {name}</span>
          </p>
          <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful Places to see on an upcoming road trip</p>
            <img src={compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly Summarize this concept: Urban Planning</p>
            <img src={bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability for the following code</p>
            <img src={code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt Here" />
            <div>
              <img src={gallery_icon} alt="" />
              <img src={mic_icon} alt="" />
              <img src={send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};
