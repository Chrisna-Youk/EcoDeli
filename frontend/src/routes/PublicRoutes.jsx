// React
import { Route } from "react-router-dom";

// Contexts
import LangContextProvider from "../contexts/language/LangContextProvider";

// Layout
import PublicLayout from "../layouts/PublicLayout";

// Pages
import HomePublic from "../pages/public/HomePublic";
import Register from "../pages/public/auth/register/Register";
import Login from "../pages/public/auth/login/Login";
import Access from "../pages/public/auth/login/Access";
import DisplayProvider from "../pages/public/DisplayProvider";
import Service from "../pages/public/Service";
import PublicCustomers from "../pages/public/PublicCustomers";
import PublicProviders from "../pages/public/PublicProviders";
import PublicDelivrers from "../pages/public/PublicDelivrers";
import PublicMerchants from "../pages/public/PublicMerchants";
import SubscriptionPlans from "../pages/public/SubscriptionsCustomer"

const PublicRoutes = (
  <Route
    path="/"
    element={
      <LangContextProvider>
        <PublicLayout />
      </LangContextProvider>
    }
  >
    <Route index element={<HomePublic />} />
    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />
    <Route path="access/:verifyToken" element={<Access />} />
    <Route path="display-cards" element={<DisplayProvider />} />
    <Route path="service" element={<Service />} />
    <Route path="customers" element={<PublicCustomers />} />
    <Route path="providers" element={<PublicProviders />} />
    <Route path="delivrers" element={<PublicDelivrers />} />
    <Route path="merchants" element={<PublicMerchants />} />
    <Route path="subscription" element={<SubscriptionPlans />} />
  </Route>
);

export default PublicRoutes;
