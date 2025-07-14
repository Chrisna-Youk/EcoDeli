// React
import { Route } from "react-router-dom";

// Layout
import CustomerLayout from "../layouts/CustomerLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeCustomer from "../pages/customer/HomeCustomer";
import DeliveriesPageCustomer from "../pages/customer/delivery/ListDeliveries";
import ServicesPageCustomers from "../pages/customer/ServicesPageCustomers";
import TransportPageCustomer from "../pages/customer/TransportPageCustomers";
import CreatePageCustomer from "../pages/customer/CreatePage";
import CreateServiceCustomer from "../pages/customer/CreateServiceCustomer";
import CreateDeliveryCustomer from "../pages/customer/CreateDeliveryCustomer";
import CreateTransportCustomer from "../pages/customer/CreateTransportPageCustomer";
import CustomerAnnouncements from "../pages/customer/CustomerAnnoucements";
import SubscriptionPlans from "../pages/customer/SubscriptionsCustomer";
import CustomerProfilePage from "../pages/customer/CustomerProfile";
import PaymentTrackingPage from "../pages/customer/CustomerPayementsTracking";
import ChatCustomer from "../pages/customer/chat/ChatCustomer";
import ChatListCustomer from "../pages/customer/chat/ChatListCustomer";
import ServiceDetailsPage from "../pages/customer/ServiceDetailsPage";
import ProfileDetails from "../pages/customer/ProfileDetails";
import RequestBecomeDeliverer from "../pages/customer/RequestBecomeDelivrer";
import RequestBecomeProvider from "../pages/customer/RequestBecomeProvider";
import TransportDetailsPage from "../pages/customer/TransportDetailsPage";
import CreateReview from "../pages/customer/CreateReview";

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
      {/* Deliveries */}
      <Route path="deliveries" element={<DeliveriesPageCustomer />} />
      <Route path="services" element={<ServicesPageCustomers />} />
      <Route path="service/:serviceId" element={<ServiceDetailsPage />} />
      <Route path="transport/:transportId" element={<TransportDetailsPage />} />
      <Route path="chat/" element={<ChatListCustomer />} />
      <Route path="chat/:customerId/:providerId/:serviceId" element={<ChatCustomer />} />
      <Route path="Transport" element={<TransportPageCustomer />} />
      <Route path="create/delivery" element={<CreateDeliveryCustomer />} />
      <Route path="create/service" element={<CreateServiceCustomer />} />
      <Route path="create" element={<CreatePageCustomer />} />
      <Route path="create/transport" element={<CreateTransportCustomer />} />
      <Route path="announcements" element={<CustomerAnnouncements />} />
      <Route path="Subscription" element={<SubscriptionPlans />} />
      <Route path="payements" element={<PaymentTrackingPage />} />
      <Route path="profile/:profileId" element={<ProfileDetails />} />
      <Route path="profile" element={<CustomerProfilePage />} />
      <Route
        path="profile/request/delivrer"
        element={<RequestBecomeDeliverer />}
      />
      <Route
        path="profile/request/provider"
        element={<RequestBecomeProvider />}
      />
      <Route path="profile/:profileId" element={<ProfileDetails />}/>
      <Route path="profile" element={<CustomerProfilePage />}/>
      <Route path="profile/request/delivrer" element={<RequestBecomeDeliverer />}/>
      <Route path="profile/request/provider" element={<RequestBecomeProvider />}/>
      <Route path="create/review/:userId" element={<CreateReview />}/>
    </Route>
  </>
);

export default CustomerRoutes;
