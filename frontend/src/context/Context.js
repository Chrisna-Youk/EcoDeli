import { createContext } from "react";

export const LanguageContext = createContext(navigator.language);
export const ThemeContext = createContext("light");
export const AuthContext = createContext(null);
