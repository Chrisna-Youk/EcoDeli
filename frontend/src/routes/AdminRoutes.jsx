// React
import { Route } from "react-router-dom";

// Layout
import AdminLayout from "../layouts/AdminLayout";

// Context
import AuthContextProvider from "../contexts/auth/AuthContextProvider";

// Pages
import User from "../pages/admin/user/UserManagementPage";
import HomeAdmin from "../pages/admin/HomeAdmin";
import UserManagementPage from "../pages/admin/user/UserManagementPage";
import MerchantsManagementPage from "../pages/admin/user/Merchants";
import DelivrerRequestsPage from "../pages/admin/delivrers/DelivererRequests";
import AdminCustomersAnnouncements from "../pages/admin/customers/CustomersAllAnnouncements";
import AdminDelivrersAnnouncements from "../pages/admin/delivrers/DelivrersAllAnnouncements";
import MerchantRequestsPage from "../pages/admin/merchants/MerchantsRequests";
import ProviderRequestsPage from "../pages/admin/providers/ProviderRequests";
import CustomersManagementPage from "../pages/admin/user/CustomersManagementPage"
import DelivrerManagementPage from "../pages/admin/user/DelivrerManagementPage"
import ProviderManagementPage from "../pages/admin/user/ProviderManagementPage"


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
      <Route path="users" element={<UserManagementPage />} />
      <Route path="customers" element={<CustomersManagementPage />} />
      <Route path="providers" element={<ProviderManagementPage />} />
      <Route path="delivrers" element={<DelivrerManagementPage />} />
      <Route path="merchants" element={<MerchantsManagementPage />} />
      <Route path="DelivrerRequests" element={<DelivrerRequestsPage />} />
      <Route path="MerchantRequests" element={<MerchantRequestsPage />} />
      <Route path="ProviderRequests" element={<ProviderRequestsPage />} />
      <Route path="CustomersAnnouncements" element={<AdminCustomersAnnouncements />} />
      <Route path="DelivrersAnnouncements" element={<AdminDelivrersAnnouncements />} />
    </Route>
  </>
);

export default AdminRoutes;
