// React
import { Route } from "react-router-dom";

// Layout
import DelivrerLayout from "../layout/DelivrerLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeDelivrer from "../pages/delivrer/HomeDelivrer";

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
    </Route>
  </>
);

export default DelivrerRoutes;
