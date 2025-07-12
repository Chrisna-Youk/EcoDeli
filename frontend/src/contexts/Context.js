import { createContext } from "react";

export const AuthContext = createContext("");

export const LangContext = createContext(navigator.language);
export const ThemeContext = createContext("light");
