// React
import { Route } from "react-router-dom";

// Layout
import MerchantLayout from "../layout/MerchantLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeMerchant from "../pages/merchant/HomeMerchant";

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
  </Route>
);

export default MerchantRoutes;
