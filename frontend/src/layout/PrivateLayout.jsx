// React
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Auth & Theme context
import { AuthContext, ThemeContext } from "../context/Context";

// Third
// import axios from "axios";
import { useTranslation } from "react-i18next";

const PrivateLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
    i18n.changeLanguage("it");
  }, [i18n]);
  // // useState and useEffect with API axios call


  return (
    <div>
      {/* <AuthContext.Provider value={auth}> */}
      <ThemeContext.Provider value={null}>
        <main>
          <Outlet />
        </main>
      </ThemeContext.Provider>
      {/* </AuthContext.Provider> */}
    </div>
  );
};

export default PrivateLayout;
