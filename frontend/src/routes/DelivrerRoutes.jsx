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
      <Route path="MyDeliverAccount" element={<MyDeliverAccount />} />
      <Route path="announcements" element={<DelivrerAnnoucements />} />
      <Route path="announcement/:announcementId" element={<DelivrerAnnoucements />} />
      <Route path="DelivrerCreateAnnoucements" element={<DelivrerCreateAnnoucements />} />
      <Route path="UpComingDeliveries" element={<DelivrerUpComingDeliveries />} />
      <Route path="DeliveriesHistory" element={<DelivrerDeliveriesHistory />} />
      <Route path="PaymentsHistory" element={<DelivrerPaymentsHistory />} />
    </Route>
  </>
);

export default DelivrerRoutes;
