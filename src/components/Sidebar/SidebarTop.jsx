import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlus, FaRegMessage } from "react-icons/fa6";

export const SidebarTop = ({
  extended,
  onToggle,
  newChat,
  loadPrompt,
  prevPrompts,
}) => {
  return (
    <div className="top">
      <AiOutlineMenu onClick={onToggle} className="menu" />

      <div onClick={newChat} className="new-chat">
        <FaPlus className="icon" />
        {extended && <p>New Chat</p>}
      </div>
      {extended && (
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((item, index) => (
            <div
              key={index}
              onClick={() => loadPrompt(item)}
              className="recent-entry"
            >
              <FaRegMessage/>
              <p>{item.slice(0, 18)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
