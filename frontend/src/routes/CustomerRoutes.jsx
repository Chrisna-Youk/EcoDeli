// React
import { Route } from "react-router-dom";

// Layout
import CustomerLayout from "../layouts/CustomerLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeCustomer from "../pages/customer/HomeCustomer";
import DeliveriesPageCustomer from "../pages/customer/DeliveriesPageCustomers";
import ServicesPageCustomers from "../pages/customer/ServicesPageCustomers";
import ServiceDetailCustomers from "../pages/customer/ServiceDetailCustomers";
import TransportPageCustomer from "../pages/customer/TransportPageCustomers";
import CreatePageCustomer from "../pages/customer/CreatePage";
import CreateServiceCustomer from "../pages/customer/CreateServicePageCustomer";
import CreateDeliveryCustomer from "../pages/customer/CreateDeliveryPageCustomer";
import CreateTransportCustomer from "../pages/customer/CreateTransportPageCustomer";
import CustomerAnnouncements from "../pages/customer/CustomerAnnoucements";
import SubscriptionPlans from "../pages/customer/SubscriptionsCustomer";
import CustomerProfilePage from "../pages/customer/CustomerProfile";
import PaymentTrackingPage from "../pages/customer/CustomerPayementsTracking";
import ChatCustomer from "../pages/customer/ChatCustomer";

const CustomerRoutes = (
  <>
    <Route
      path="/customer"
      element={
        <AuthContextProvider>
          <CustomerLayout />
        </AuthContextProvider>
      }
    >
      <Route index element={<HomeCustomer />} />
      <Route path="Deliveries" element={<DeliveriesPageCustomer />} />
      <Route path="Services" element={<ServicesPageCustomers />} />
      <Route path="ServiceDetails/:ServiceId" element={<ServiceDetailCustomers />} />
      <Route path="Transport" element={<TransportPageCustomer />} />
      <Route path="Create" element={<CreatePageCustomer />} />
      <Route path="CreateDelivery" element={<CreateDeliveryCustomer />} />
      <Route path="CreateService" element={<CreateServiceCustomer />} />
      <Route path="CreateTransport" element={<CreateTransportCustomer />} />
      <Route path="MyAnnoucements" element={<CustomerAnnouncements />} />
      <Route path="Subscription" element={<SubscriptionPlans />} />
      <Route path="Profil" element={<CustomerProfilePage />} />
      <Route path="Payements" element={<PaymentTrackingPage />} />
      <Route path="ChatCustomer" element={<ChatCustomer />} />
    </Route>
  </>
);

export default CustomerRoutes;
