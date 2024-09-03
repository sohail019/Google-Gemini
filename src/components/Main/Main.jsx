import "./Main.css";
import { assets } from "../../assets/assets";
import { useState, useRef, useContext } from "react";
import { Context } from "../../context/Context";

export const Main = () => {
  const [name, setName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const usernameRef = useRef(null);

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.name.value;
    setName(username);
    setShowPrompt(false);

    usernameRef.current.classList.add("animate-username");
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
    gemini_icon,
  } = assets;

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <div>
                {showPrompt && (
                  <div className="custom-prompt">
                    <p>Enter Your Name</p>
                    <form onSubmit={handleNameSubmit}>
                      {/* <label htmlFor="name">Enter your Name:</label> */}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoFocus
                      />
                      <button type="submit">Enter</button>
                    </form>
                  </div>
                )}
                <span>
                  Hello,{" "}
                  <span className="username" ref={usernameRef}>
                    {" "}
                    {name || "Sohail"}{" "}
                  </span>
                </span>
              </div>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={gemini_icon} alt="" />
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
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a Prompt Here"
            />
            <div>
              <img src={gallery_icon} alt="" />
              <img src={mic_icon} alt="" />
              <img onClick={() => onSent()} src={send_icon} alt="" />
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
