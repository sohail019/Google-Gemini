import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {
    menu_icon,
    plus_icon,
    message_icon,
    question_icon,
    history_icon,
    setting_icon,
  } = assets;
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className="menu" src={menu_icon} alt="Menu Icon" />
        <div className="new-chat">
          <img src={plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={message_icon} alt="" />
              <p>What is React...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={setting_icon} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};
