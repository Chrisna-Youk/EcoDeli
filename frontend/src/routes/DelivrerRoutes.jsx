// React
import { Route } from "react-router-dom";

// Layout
import DelivrerLayout from "../layouts/DelivrerLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeDelivrer from "../pages/delivrer/HomeDelivrer";
import MyDeliverAccount from "../pages/delivrer/MyDeliveryAccount";
import DelivrerAnnoucements from "../pages/delivrer/DelivrerAnnoucements";
import DelivrerCreateAnnoucements from "../pages/delivrer/DelivrerCreateAnnoucements";
import DelivrerUpComingDeliveries from "../pages/delivrer/DelivrerUpComingDeliveries";
import DelivrerDeliveriesHistory from "../pages/delivrer/DelivrerDeliveriesHistory";
import DelivrerProfile from "../pages/delivrer/DelivrerProfile";
import DelivrerPaymentsHistory from "../pages/delivrer/DelivrerPaymentsHistory";

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
      <Route path="DelivrerAnnouncements" element={<DelivrerAnnoucements />} />
      <Route path="DelivrerCreateAnnoucements" element={<DelivrerCreateAnnoucements />} />
      <Route path="UpComingDeliveries" element={<DelivrerUpComingDeliveries />} />
      <Route path="DeliveriesHistory" element={<DelivrerDeliveriesHistory />} />
      <Route path="Profile" element={<DelivrerProfile />} />
      <Route path="PaymentsHistory" element={<DelivrerPaymentsHistory />} />
    </Route>
  </>
);

export default DelivrerRoutes;
