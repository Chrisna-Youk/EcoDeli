// React
import { Route } from "react-router-dom";

// Layout
import ProviderLayout from "../layouts/ProviderLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeProvider from "../pages/provider/HomeProvider";
// import DisplayPresta from "../pages/TO_IMPLEMENT/DisplayPresta";

const ProviderRoutes = (
  <Route
    path="/provider"
    element={
      <AuthContextProvider>
        <ProviderLayout />
      </AuthContextProvider>
    }
  >
    <Route index element={<HomeProvider />} />
    {/* <Route path="presta" element={<DisplayPresta />} /> */}
  </Route>
);

export default ProviderRoutes;
