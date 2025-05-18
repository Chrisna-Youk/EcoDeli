// React
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Auth & Theme context
import { ThemeContext } from "../contexts/Context";

// Layout components
import DelivrerHeader from "./header/DelivrerHeader";

// Third
import { useTranslation } from "react-i18next";

const DelivrerLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
    i18n.changeLanguage("it");
  }, [i18n]);
  return (
    <div className="flex flex-row bg-zinc-900">
      <ThemeContext.Provider value={null}>
        <DelivrerHeader />
        <main className="overflow-x-hidden bg-white">
          <Outlet />
        </main>
      </ThemeContext.Provider>
    </div>
  );
};

export default DelivrerLayout;
