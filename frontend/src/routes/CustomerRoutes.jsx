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
import CreateServiceCustomer from "../pages/customer/CreateServiceCustomer";
import CreateDeliveryCustomer from "../pages/customer/CreateDeliveryPageCustomer";
import CreateTransportCustomer from "../pages/customer/CreateTransportPageCustomer";
import CustomerAnnouncements from "../pages/customer/CustomerAnnoucements";
import SubscriptionPlans from "../pages/customer/SubscriptionsCustomer";
import CustomerProfilePage from "../pages/customer/CustomerProfile";
import PaymentTrackingPage from "../pages/customer/CustomerPayementsTracking";
import ChatCustomer from "../pages/customer/ChatCustomer";
import ServiceDetailsPage from "../pages/TO_IMPLEMENT/ServiceDetailsPage";
import ProfileDetails from "../pages/customer/ProfileDetails";
import RequestBecomeDeliverer from "../pages/customer/RequestBecomeDelivrer";
import RequestBecomeProvider from "../pages/customer/RequestBecomeProvider";

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
      <Route path="service/:serviceId" element={<ServiceDetailsPage />} />
      <Route path="ServiceDetails/:ServiceId" element={<ServiceDetailCustomers />} />
      <Route path="Transport" element={<TransportPageCustomer />} />
      <Route path="CreateDelivery" element={<CreateDeliveryCustomer />} />
      <Route path="create/service" element={<CreateServiceCustomer />} />
      <Route path="customer/create" element={<CreatePageCustomer />} />
      <Route path="create/transport" element={<CreateTransportCustomer />} />
      <Route path="customer/announcements" element={<CustomerAnnouncements />} />
      <Route path="Subscription" element={<SubscriptionPlans />} />
      <Route path="payements" element={<PaymentTrackingPage />} />
      <Route path="ChatCustomer" element={<ChatCustomer />} />
      <Route path="profile/:profileId" element={<ProfileDetails />}/>
      <Route path="profile" element={<CustomerProfilePage />}/>
      <Route path="profile/request/delivrer" element={<RequestBecomeDeliverer />}/>
      <Route path="profile/request/provider" element={<RequestBecomeProvider />}/>
    </Route>
  </>
);

export default CustomerRoutes;
