// React
import { Route } from "react-router-dom";

// Layout
import ProviderLayout from "../layouts/ProviderLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeProvider from "../pages/provider/HomeProvider";
import ProviderAnnouncements from "../pages/provider/ProviderAnnoucments";
import EditServiceProvider from "../pages/provider/EditServiceProvider";
import ProviderPaymentsHistory from "../pages/provider/ProviderPaymentsHistory";
import ProviderProvidingHistory from "../pages/provider/ProviderProvidingHistory";
import ProviderUpComingProviding from "../pages/provider/DelivrerUpComingServices";
<<<<<<< HEAD
import CreateServiceProvider from "../pages/provider/CreateServiceProvider";
=======
import ChatProvider from "../pages/provider/chat/ChatProvider";
import ChatListCustomer from "../pages/provider/chat/ChatListCustomer";
>>>>>>> 011f2b59a8f078570f4d7784d225614f15d911a5
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
    <Route path="chat/" element={<ChatListCustomer />} />
    <Route path="chat/:customerId" element={<ChatProvider />} />
    <Route path="Payements" element={<ProviderPaymentsHistory />} />
    <Route path="ProvidingHistory" element={<ProviderProvidingHistory />} />
    <Route path="ProvidingUpComing" element={<ProviderUpComingProviding />} />
  </Route>
);

export default ProviderRoutes;
