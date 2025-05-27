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
import TransportPageCustomer from "../pages/customer/TransportPageCustomers";

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
      <Route path="Transport" element={<TransportPageCustomer />} />
    </Route>
  </>
);

export default CustomerRoutes;
