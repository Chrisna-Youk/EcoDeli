// React
import { Route } from "react-router-dom";

// Layout
import MerchantLayout from "../layouts/MerchantLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeMerchant from "../pages/merchant/HomeMerchant";
import ViewAnnoucement from "../pages/merchant/ViewAnnoucement";
import MerchantProfileEdit from "../pages/merchant/ProviderProfileEdit";
import UpdateMerchantInfos from "../pages/merchant/UpdateMerchantInfos";
import CreateTransportPageMerchant from "../pages/merchant/CreateTransportPageMerchant";
import MerchantAnnouncements from "../pages/merchant/MerchantAnnouncements";

const MerchantRoutes = (
  <Route
    path="/merchant"
    element={
      <AuthContextProvider>
        <MerchantLayout />
      </AuthContextProvider>
    }
  >
    <Route index element={<HomeMerchant />} />
    <Route path="ViewAnnoucement" element={<ViewAnnoucement />}/>
    <Route path="/merchant/profile" element={<MerchantProfileEdit />}/>
    <Route path="/merchant/update/documents" element={<UpdateMerchantInfos />}/>
    <Route path="/merchant/create/service" element={<CreateTransportPageMerchant />}/>
    <Route path="/merchant/announcements" element={<MerchantAnnouncements />}/>
  </Route>
);

export default MerchantRoutes;
