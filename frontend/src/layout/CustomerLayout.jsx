// React
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Theme context
import { ThemeContext } from "../contexts/Context";

// Layout components
import CustomerHeader from "./header/CustomerHeader";

// Third
import { useTranslation } from "react-i18next";

const CustomerLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
    i18n.changeLanguage("it");
  }, [i18n]);

  // const {data} = useRole();
  // console.log(data);

  return (
    <ThemeContext.Provider value={null}>
      <CustomerHeader />
      <main>
        <Outlet />
      </main>
    </ThemeContext.Provider>
  );
};

export default CustomerLayout;
