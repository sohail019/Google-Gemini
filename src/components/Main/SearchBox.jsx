import React from "react";
import { assets } from "../../assets/assets";
import { LuImagePlus } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export const SearchBox = ({ input, setInput, onSent }) => {
  return (
    <div className="search-box">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Enter a Prompt Here"
      />
      <div>
        <LuImagePlus className="icon" />
        <FaMicrophone className="icon" />
        {input && (
          <IoMdSend className="icon" onClick={() => onSent()} />
        )}
      </div>
    </div>
  );
};
