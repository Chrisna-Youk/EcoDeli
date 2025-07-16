  // React
  import { useEffect } from "react";
  import { Outlet, useNavigate } from "react-router-dom";

  // Auth & Theme context
  import { ThemeContext } from "../contexts/Context";

  // Layout components
  import MerchantHeader from "./header/MerchantHeader";

  // Third
  import { useTranslation } from "react-i18next";
  import useAuthContext from "../contexts/auth/useAuthContext";
  import { jwtDecode } from "jwt-decode";

  const MerchantLayout = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const authContext = useAuthContext();
    const accessToken = jwtDecode(authContext.auth);

    if (!(accessToken.role === "merchant" || "admin")) {
      navigate(-1);
    }

    useEffect(() => {
      // "en" needs to be replaced by a dynamic variable that is toggled by user interaction, reload page when clicked
      i18n.changeLanguage("it");
    }, [i18n]);
    return (
      <div className="flex bg-[#B9D5C5] min-h-screen">
        <ThemeContext.Provider value={null}>
          <MerchantHeader />
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </ThemeContext.Provider>
      </div>
    );
  };

  export default MerchantLayout;
