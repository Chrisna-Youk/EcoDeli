import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import DelivrerRoutes from "./DelivrerRoutes";
import MerchantRoutes from "./MerchantRoutes";
import ProviderRoutes from "./ProviderRoutes";
import PublicRoutes from "./PublicRoutes";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    {AdminRoutes}
    {CustomerRoutes}
    {DelivrerRoutes}
    {MerchantRoutes}
    {ProviderRoutes}
    {PublicRoutes}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
