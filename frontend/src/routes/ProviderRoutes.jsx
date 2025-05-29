// React
import { Route } from "react-router-dom";

// Layout
import ProviderLayout from "../layouts/ProviderLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeProvider from "../pages/provider/HomeProvider";
import ProviderAnnouncements from "../pages/provider/ProviderAnnoucments";
import CreateServiceProvider from "../pages/provider/CreateServicePageCustomer";
import ProviderPaymentsHistory from "../pages/provider/ProviderPaymentsHistory";
import ProviderProvidingHistory from "../pages/provider/ProviderProvidingHistory";
import ProviderUpComingProviding from "../pages/provider/DelivrerUpComingDeliveries";
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
    <Route path="Annoucements" element={<ProviderAnnouncements />} />
    <Route path="CreateAnnouncement" element={<CreateServiceProvider />} />
    <Route path="Payements" element={<ProviderPaymentsHistory />} />
    <Route path="ProvidingHistory" element={<ProviderProvidingHistory />} />
    <Route path="ProvidingUpComing" element={<ProviderUpComingProviding />} />
  </Route>
);

export default ProviderRoutes;
