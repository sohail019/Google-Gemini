import React from "react";
import { Card } from "./Card";
import { FaRegCompass, FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoCodeSlashSharp } from "react-icons/io5";



export const CardsSection = ({setInput, onSent}) => {
  const cards = [
    {
      text: "Suggest Beautiful Places to see on an upcoming road trip",
      icon: <FaRegCompass />,
    },
    {
      text: "Briefly Summarize this concept: Urban Planning",
      icon: <FaRegLightbulb />,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      icon: <FaRegMessage />,
    },
    {
      text: "Improve the readability for the following code",
      icon: <IoCodeSlashSharp />,
    },
  ];

  const handleCardClick = (text) => {
    setInput(text);
    onSent(text);
  }

  return (
    <div className="cards">
      {
        cards.map((card, index) => {
          const {text, icon} = card
          return (
            <Card key={index} text={text} icon={icon} onClick={() => handleCardClick(text)} />
          )
        })
      }
    </div>
  );
};
