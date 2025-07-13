import { useState, useEffect } from "react";
import { LangContext } from "../Context";
import i18n from "../../i18n/i18n";

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "fr"; // fallback
    setLang(storedLang);
    i18n.changeLanguage(storedLang);
    // window.location.reload();
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
