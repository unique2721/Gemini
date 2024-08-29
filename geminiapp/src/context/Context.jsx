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

  const typyingEffect = (index, delayWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + " " + delayWord);
    }, 25 * index);
  };

  const newChat = () => {
    setInput("");
    setLoading(false);
    setShowResultData(false);
    setRecentPrompt("");
    setPreviousPropmpts([]);
    setResultData("");
  };

  const showSendIcon = input ? true : false;

  const onSent = async (prompt) => {
    setResultData("");
    setShowResultData(true);
    setLoading(true);
    let response;
    if (prompt !== undefined) {
      response = await run(input);
      setRecentPrompt(prompt);
    } else {
      setPreviousPropmpts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    let newResponse2;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += responseArray[i];
      }
    }
    newResponse2 = newResponse.split("*").join(" ");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      let word = newResponseArray[i];
      typyingEffect(i, word);
    }
    setResultData(newResponse2);
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
    previousPropmpts,
    setPreviousPropmpts,
    loading,
    setLoading,
    onSent,
    newChat,
    showSendIcon,
  };

  run("what is react?");
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
