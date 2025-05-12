// React
import { Route } from "react-router-dom";

// Layout
import ProviderLayout from "../layout/ProviderLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeProvider from "../pages/provider/HomeProvider";

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
  </Route>
);

export default ProviderRoutes;
