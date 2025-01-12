import { createContext, useState } from "react";
import runChat from "../config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    try {
      let response;
      if (input) {
        
        setRecentPrompt(input);
        response = await runChat(input);
        setPrevPrompts((prev) => {
          let updatedPrompts = [...prev, input];
          return updatedPrompts;
        });
      }
      else{
        setRecentPrompt(prompt);
        response = await runChat(prompt);
      }

      // Format the response
      let formattedResponse = response
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Replace **text** with <b>text</b>
        .replace(/\*(.*?)\*/g, "<i>$1</i>") // Replace *text* with <i>text</i>
        .replace(/\n/g, "<br>"); // Replace new lines with <br>

      // Split response into words and animate rendering
      const words = formattedResponse.split(" ");
      let accumulatedResponse = "";

      words.forEach((word, index) => {
        setTimeout(() => {
          accumulatedResponse += word + " ";
          setResultData(accumulatedResponse.trim());
        }, 75 * index);
      });
    } catch (error) {
      console.error("Error fetching response:", error);
      setResultData("<b>Error:</b> Failed to fetch the response.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    resultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
