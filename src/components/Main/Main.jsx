import "./Main.css";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { NavBar } from "./NavBar";
import { GreetSection } from "./GreetSection";
import { CardsSection } from "./CardsSection";
import { ResultSection } from "./ResultSection";
import { SearchBox } from "./SearchBox.jsx";

export const Main = () => {
  const [name, setName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <NavBar />
      <div className="main-container">
        {!showResult ? (
          <>
            <GreetSection
              name={name}
              setName={setName}
              showPrompt={showPrompt}
              setShowPrompt={setShowPrompt}
            />
            <CardsSection setInput={setInput} onSent={onSent} />
          </>
        ) : (
          <ResultSection
            recentPrompt={recentPrompt}
            loading={loading}
            resultData={resultData}
          />
        )}
        <div className="main-bottom">
          <SearchBox input={input} setInput={setInput} onSent={onSent} />
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};
