// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// DevTools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Layouts
import AdminLayout from "./layout/AdminLayout";
import CustomerLayout from "./layout/CustomerLayout";
import DelivrerLayout from "./layout/DelivrerLayout";
import MerchantLayout from "./layout/MerchantLayout";
import ProviderLayout from "./layout/ProviderLayout";

// Pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import ResetPassword from "./pages/Reset-Password";
import PasswordChangedSuccess from "./pages/Password-Changed-Success";
import TemplateAd from "./pages/template-ads";
import CreateAd from "./pages/CreateAd";
import MyDeliverAccount from "./pages/MyDeliveryAccount";


// Customer Pages
import Login from "./pages/auth/Login";
import Access from "./pages/auth/Access";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Admin Pages

// Language Context
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n/i18n";
import { LanguageContext } from "./context/Context";

// ReactQuery Context
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/reactQuery";

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <LanguageContext.Provider value={navigator.language}>
          <Routes>
            {/* Admin Layout */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="template-ads" element={<TemplateAd />} />
              <Route path="create-ad" element={<CreateAd />} />
              <Route path="delivery-account" element={<MyDeliverAccount />} />
            </Route>
            {/* Customer Layout */}
            <Route path="/" element={<CustomerLayout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="access/:verifyToken" element={<Access />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
          </Routes>
        </LanguageContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
