import { useContext } from "react";
import { LangContext } from "../Context";

const useLangContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLangContext must be used within a LangContextProvider");
  }
  return context;
};

export default useLangContext;
