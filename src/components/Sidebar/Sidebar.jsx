import "./Sidebar.css";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { SidebarTop } from "./SidebarTop";
import { SidebarBottom } from "./SidebarBottom";
import { MobileSidebarToggle } from "./MobileSidebarToggle";

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const handleToggle = () => setExtended((prev) => !prev);

  const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

  return (
    <>
      <MobileSidebarToggle toggleSidebar={toggleSidebar} />
      <div
        className={`sidebar ${extended ? "expanded" : "collapsed"} ${
          isSidebarActive ? "active" : ""
        }`}
      >
        <SidebarTop
          extended={extended}
          onToggle={handleToggle}
          newChat={newChat}
          loadPrompt={loadPrompt}
          prevPrompts={prevPrompts}
        />
        <SidebarBottom extended={extended} />
      </div>
    </>
  );
};
