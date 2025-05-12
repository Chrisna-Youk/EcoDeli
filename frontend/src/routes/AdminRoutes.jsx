// React
import { Route } from "react-router-dom";

// Layout
import AdminLayout from "../layout/AdminLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import HomeAdmin from "../pages/admin/HomeAdmin";

const AdminRoutes = (
  <>
    <Route
      path="/admin"
      element={
        <AuthContextProvider>
          <AdminLayout />
        </AuthContextProvider>
      }
    >
      <Route index element={<HomeAdmin />} />
    </Route>
  </>
);

export default AdminRoutes;
