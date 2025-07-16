// React
import { Route } from "react-router-dom";

// Layout
import MerchantLayout from "../layouts/MerchantLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeMerchant from "../pages/merchant/HomeMerchant";
import ViewAnnoucement from "../pages/merchant/ViewAnnoucement";
import CreateDeliveryPageMerchant from "../pages/merchant/CreateDeliveryPageMerchant"

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
    <Route path="CreateDeliveryPageMerchant" element={<CreateDeliveryPageMerchant />}/>
  </Route>
);

export default MerchantRoutes;
