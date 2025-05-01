// React
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

// Pages
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import ResetPassword from "./pages/Reset-Password";
import PasswordChangedSuccess from "./pages/Password-Changed-Succes";

// Language
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./context/Context";
import ForgotPassword from "./pages/Forgot-Password";

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={navigator.language}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="changed-password-success" element={<PasswordChangedSuccess />} />
          </Route>
          <Route path="/dashboard" element={<PrivateLayout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard/service" element={<Service />} />
            <Route path="/dashboard/users" element={<Users />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
};

export default App;
