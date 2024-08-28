import { createContext, useState } from "react";
import run from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
  /* state variables */
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState("");
  const [showResultData, setShowResultData] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPropmpts, setPreviousPropmpts] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSent = async (prompt) => {
    setResultData("");
    setShowResultData(true);
    setLoading(true);
    setRecentPrompt(input);
    const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };
  const ContextValue = {
    input,
    setInput,
    resultData,
    setResultData,
    showResultData,
    setShowResultData,
    recentPrompt,
    setRecentPrompt,
    previousPropmpts,
    setPreviousPropmpts,
    loading,
    setLoading,
    onSent,
  };

  run("what is react?");
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
