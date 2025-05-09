import http from "../utils/http";
// import { useTranslation } from "react-i18next";

// const useLanguage = () => {
//   const { i18n } = useTranslation();
//   return i18n.language;
// };

const useAuth = () => {
  http.interceptors.request.use(

  );
};

export default useAuth;

{/* 
  
L'utilisateur se connecte :
  V => accessToken + refreshToken en httpOnly
  E => Rien
  
L'utilisateur utilise le accessToken :
  V => Tout va bien l'action se realise
  E => Tenter de renouveller l'accessToken grace au refreshToken
    V => 
  
*/}
