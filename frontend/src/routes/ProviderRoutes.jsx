// React
import { Route } from "react-router-dom";

// Layout
import ProviderLayout from "../layouts/ProviderLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeProvider from "../pages/provider/HomeProvider";
import ProviderAnnouncements from "../pages/provider/ProviderAnnoucments";
import CreateServiceProvider from "../pages/provider/CreateServicePageProvider";
import EditServiceProvider from "../pages/provider/EditServiceProvider";
import ProviderPaymentsHistory from "../pages/provider/ProviderPaymentsHistory";
import ProviderProvidingHistory from "../pages/provider/ProviderProvidingHistory";
import ProviderUpComingProviding from "../pages/provider/DelivrerUpComingServices";
// import DisplayPresta from "../pages/TO_IMPLEMENT/DisplayPresta";

const ProviderRoutes = (
  <Route
    path="/provider"
    element={
      <AuthContextProvider>
        <ProviderLayout />
      </AuthContextProvider>
    }
  >
    <Route index element={<HomeProvider />} />
    {/* <Route path="presta" element={<DisplayPresta />} /> */}
    <Route path="services" element={<ProviderAnnouncements />} />
    <Route path="services/:serviceId" element={<EditServiceProvider />} />
    <Route path="create/service" element={<CreateServiceProvider />} />
    <Route path="Payements" element={<ProviderPaymentsHistory />} />
    <Route path="ProvidingHistory" element={<ProviderProvidingHistory />} />
    <Route path="ProvidingUpComing" element={<ProviderUpComingProviding />} />
  </Route>
);

export default ProviderRoutes;
