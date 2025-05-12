import { createContext } from "react";

export const LanguageContext = createContext(navigator.language);
export const ThemeContext = createContext("light");
