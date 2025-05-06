// React
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Auth & Theme context
import { ThemeContext } from "../context/Context";

// Layout components
import MerchantHeader from "./header/MerchantHeader";

// Third
import { useTranslation } from "react-i18next";

const MerchantLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
    i18n.changeLanguage("it");
  }, [i18n]);
  return (
    <div className="flex flex-row bg-zinc-900">
      <ThemeContext.Provider value={null}>
        <MerchantHeader />
        <main>
          <Outlet />
        </main>
      </ThemeContext.Provider>
    </div>
  );
};

export default MerchantLayout;
