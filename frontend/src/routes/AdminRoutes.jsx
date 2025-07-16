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
import MerchantsManagementPage from "../pages/admin/user/MerchantManagementPage";
import AdminCustomersAnnouncements from "../pages/admin/customers/CustomersAllAnnouncements";
import AdminDelivrersAnnouncements from "../pages/admin/delivrers/DelivrersAllAnnouncements";
import MerchantRequestsPage from "../pages/admin/merchants/MerchantsRequests";
import ProviderRequestsPage from "../pages/admin/providers/ProviderRequests";
import CustomersManagementPage from "../pages/admin/user/CustomersManagementPage"
import DelivrerManagementPage from "../pages/admin/user/DelivrerManagementPage"
import ProviderManagementPage from "../pages/admin/user/ProviderManagementPage"
import ProviderRequestImages from "../pages/admin/providers/ProviderRequestImages";
import DelivrerRequestsPage from "../pages/admin/delivrers/DelivrerRequests";
import ProviderAnnouncementsAdmin from "../pages/admin/providers/ProviderAnnouncementsAdmin";
import CustomerAnnouncementsAdmin from "../pages/admin/customers/CustomerAnnouncementsAdmin";
import RegisterMerchant from "../pages/admin/merchants/RegisterMerchant";
import AdminOldServices from "../pages/admin/AdminOldServices";
import AdminUpcomingServices from "../pages/admin/AdminUpcomingServices";

// Checkpoints
import CheckpointList from "../pages/admin/checkpoints/CheckpointList";
import CheckpointDetails from "../pages/admin/checkpoints/CheckpointDetails";
import CheckpointCreate from "../pages/admin/checkpoints/CheckpointCreate";

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
      <Route path="/admin/providers/annoucements" element={<ProviderAnnouncementsAdmin />} />
      <Route path="/admin/customers/announcements" element={<CustomerAnnouncementsAdmin />} />
      <Route path="delivrers" element={<DelivrerManagementPage />} />
      <Route path="merchants" element={<MerchantsManagementPage />} />
      <Route path="MerchantRequests" element={<MerchantRequestsPage />} />
      <Route path="/admin/request/provider" element={<ProviderRequestsPage />} />
      <Route path="/admin/request/delivrer" element={<DelivrerRequestsPage />} />
      <Route path="/admin/merchant/register" element={<RegisterMerchant />} />
      <Route path="/admin/request/provider/image/:image" element={< ProviderRequestImages/>} />
      <Route path="CustomersAnnouncements" element={<AdminCustomersAnnouncements />} />
      <Route path="DelivrersAnnouncements" element={<AdminDelivrersAnnouncements />} />
      <Route path="/admin/services/old" element={<AdminOldServices />} />
      <Route path="/admin/services/upcoming" element={<AdminUpcomingServices />} />
      {/* Checkpoints */}
      <Route path="/admin/checkpoints" element={<CheckpointList />} />
      <Route path="/admin/checkpoint/:checkpointId" element={<CheckpointDetails />} />
      <Route path="/admin/create/checkpoint" element={<CheckpointCreate />} />
    </Route>
  </>
);

export default AdminRoutes;
