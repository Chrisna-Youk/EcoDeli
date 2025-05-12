import { createContext } from "react";

export const AuthContext = createContext("");

export const LanguageContext = createContext(navigator.language);
export const ThemeContext = createContext("light");
