// React
import { Route } from "react-router-dom";

// Layout
import AdminLayout from "../layouts/AdminLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import User from "../pages/admin/user/User";
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
      <Route path="user" element={<User />} />
    </Route>
  </>
);

export default AdminRoutes;
