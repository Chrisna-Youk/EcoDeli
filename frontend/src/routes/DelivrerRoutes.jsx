// React
import { Route } from "react-router-dom";

// Layout
import DelivrerLayout from "../layouts/DelivrerLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeDelivrer from "../pages/delivrer/HomeDelivrer";
import MyDeliverAccount from "../pages/delivrer/MyDeliveryAccount";
import DelivrerAnnoucements from "../pages/delivrer/announcement/DelivrerAnnoucements";
import DelivrerAnnouncementDetails from "../pages/delivrer/announcement/DelivrerAnnouncementDetails";
import DelivrerAnnouncementConfirmation from "../pages/delivrer/announcement/DelivrerAnnouncementConfirmation";
import DelivrerCreateAnnoucements from "../pages/delivrer/DelivrerCreateAnnoucements";
import DelivrerUpComingDeliveries from "../pages/delivrer/DelivrerUpComingDeliveries";
import DelivrerHistoryTodo from "../pages/delivrer/delivery/DelivrerHistoryTodo";
import DelivrerHistoryDone from "../pages/delivrer/delivery/DelivrerHistoryDone";
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
      <Route path="PaymentsHistory" element={<DelivrerPaymentsHistory />} />
      <Route path="DelivrerCreateAnnoucements" element={<DelivrerCreateAnnoucements />} />
      <Route path="UpComingDeliveries" element={<DelivrerUpComingDeliveries />} />
      {/* announcements */}
      <Route path="announcements" element={<DelivrerAnnoucements />} />
      <Route path="announcement/:announcementId" element={<DelivrerAnnouncementDetails />} />
      <Route path="announcement/confirmation/:announcementId" element={<DelivrerAnnouncementConfirmation />} />
      {/* delivery */}
      <Route path="delivery/todo" element={<DelivrerHistoryTodo />} />
      <Route path="delivery/done" element={<DelivrerHistoryDone />} />
    </Route>
  </>
);

export default DelivrerRoutes;
