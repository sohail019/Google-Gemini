import { LuImagePlus } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

export const SearchBox = ({ input, setInput, onSent }) => {
  
  const [isListening, setIsListening] = useState(false);

  //* Function to start listening using Web Speech API
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false //? don't return partial results

    recognition.onstart = () => {
      setIsListening(true)
      console.log("Listening for Speech...")
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      console.log("Recognized", transcript)
      setInput(transcript) //? set the input to the recognized text
      onSent(transcript)
      setIsListening(false) //? stop the listening state
    }

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false) //? stop listening state in case of error
    }

    recognition.onend = () => {
      console.log("Speech Recognition Ended");
      setIsListening(false)
    }

    recognition.start()
  }
  return (
    <div className="search-box">
      <input
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === "Enter") onSent()
         } }
        value={input}
        type="text"
        placeholder="Enter a Prompt Here"
      />
      <div>
        <LuImagePlus className="icon" />
        {/* Speech */}
        <FaMicrophone className={`icon ${isListening ? "listening" : ""}`} onClick={startListening} />
        {input && (
          <IoMdSend className="icon" onClick={() => onSent()} />
        )}
      </div>
    </div>
  );
};
