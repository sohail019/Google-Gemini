import React from "react";
import { Card } from "./Card";
import { FaRegCompass, FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoCodeSlashSharp } from "react-icons/io5";



export const CardsSection = ({setInput, onSent}) => {
  const cards = [
    {
      text: "Suggest Beautiful Places to visit in Mumbai",
      icon: <FaRegCompass />,
    },
    {
      text: "Create trivia questions about a specific topic",
      icon: <FaRegLightbulb />,
    },
    {
      text: "Write a product description for a new type of toothbrush",
      icon: <FaRegMessage />,
    },
    {
      text: "Suggest Javascript framework to create Frontend",
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
