// React
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Auth & Theme context
import { ThemeContext } from "../contexts/Context";

// Layout components
import ProviderHeader from "./header/ProviderHeader";

// Third
import { useTranslation } from "react-i18next";
import useAuthContext from "../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const ProviderLayout = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const authContext = useAuthContext();
  const accessToken = jwtDecode(authContext.auth);

  if (!(accessToken.role === "provider" || "admin")) {
    navigate(-1);
  }

  useEffect(() => {
    // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
    i18n.changeLanguage("it");
  }, [i18n]);
  return (
    <div className="flex flex-row bg-zinc-900">
      <ThemeContext.Provider value={null}>
        <ProviderHeader />
        <main className="bg-white w-screen flex flex-col items-center min-h-screen">
          <Outlet />
        </main>
      </ThemeContext.Provider>
    </div>
  );
};

export default ProviderLayout;
