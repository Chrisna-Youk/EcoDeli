// React
import { Route } from "react-router-dom";

// Layout
import DelivrerLayout from "../layouts/DelivrerLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeDelivrer from "../pages/delivrer/HomeDelivrer";
import MyDeliverAccount from "../pages/delivrer/MyDeliveryAccount";

const DelivrerRoutes = (
  <>
    <Route
      path="/delivrer"
      element={
        <AuthContextProvider>
          <DelivrerLayout />
        </AuthContextProvider>
      }
    >
      <Route index element={<HomeDelivrer />} />
      <Route path="account" element={<MyDeliverAccount />} />
    </Route>
  </>
);

export default DelivrerRoutes;
