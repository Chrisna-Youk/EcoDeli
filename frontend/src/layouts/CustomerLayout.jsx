// React
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Theme context
import { ThemeContext } from "../contexts/Context";

// Layout components
import CustomerHeader from "./header/CustomerHeader";


// Third
import { useTranslation } from "react-i18next";
import useAuthContext from "../contexts/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";

const CustomerLayout = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const authContext = useAuthContext();
  const accessToken = jwtDecode(authContext.auth);

  if (!(accessToken.role === "admin")) {
    navigate(-1);
  }

  useEffect(() => {
    // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
    i18n.changeLanguage("it");
  }, [i18n]);

  // const {data} = useRole();
  // console.log(data);

  return (
    <ThemeContext.Provider value={null}>
      <CustomerHeader />
      <main className="overflow-y-hidden">
        <Outlet />
      </main>
    </ThemeContext.Provider>
  );
};

export default CustomerLayout;
