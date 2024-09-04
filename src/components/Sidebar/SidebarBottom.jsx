import React from "react";
import { IoMdSettings, IoIosTimer } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useState, useEffect } from "react";

export const SidebarBottom = ({ extended }) => {
  const [location, setLocation] = useState("Loading Location...");

  useEffect(() => {
    fetch("https://ipinfo.io/json?token=18739c9e59c13a")
      .then((res) => res.json())
      .then((data) => {
        const { city, region, country } = data;
        setLocation(`${city}, ${region}, ${country}`);
      })
      .catch((err) => {
        console.error("Error Fetching Location Data", err);
        setLocation("Failed to load location");
      });
  }, []);

  const sidebarItem = [
    {
      icon: <FaRegCircleQuestion />,
      text: "Help",
      extended: extended,
    },
    {
      icon: <IoIosTimer />,
      text: "Activity",
      extended: extended,
    },
    {
      icon: <IoMdSettings />,
      text: "Settings",
      extended: extended,
    },
  ];

  return (
    <div className="bottom">
      {sidebarItem.map((item, index) => {
        const { icon, text, extended } = item;
        return (
          // <SidebarItem icon={item.icon} text={item.text} extended={item.extended}/>
          <SidebarItem
            key={index}
            icon={icon}
            text={text}
            extended={extended}
          />
        );
      })}
      {extended && (
        <div className="location-info">
          <p>Your Location: {location}</p>
        </div>
      )}
      {/* <SidebarItem icon={question_icon} text="Help" extended={extended} />
      <SidebarItem icon={history_icon} text="Activity" extended={extended} />
      <SidebarItem icon={setting_icon} text="Settings" extended={extended} /> */}
    </div>
  );
};

const SidebarItem = ({ icon, text, extended }) => (
  <>
    <div className="bottom-item recent-entry">
      <div className="icon">{icon}</div>
      {extended && <p>{text}</p>}
    </div>
  </>
);
