// React
import { Route } from "react-router-dom";

// Layout
import MerchantLayout from "../layouts/MerchantLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeMerchant from "../pages/merchant/HomeMerchant";
import Test from "../pages/merchant/Test";

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
    <Route path="test" element={<Test />}/>
  </Route>
);

export default MerchantRoutes;
