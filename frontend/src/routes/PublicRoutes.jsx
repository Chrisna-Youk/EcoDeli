// React
import { Route } from "react-router-dom";

// Layout
import PublicLayout from "../layouts/PublicLayout";

// Pages
import HomePublic from "../pages/public/HomePublic";
import Register from "../pages/public/auth/register/Register";
import Login from "../pages/public/auth/login/Login";
import Access from "../pages/public/auth/login/Access";
import DisplayProvider from "../pages/public/DisplayProvider";

const PublicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<HomePublic />} />
    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />
    <Route path="access/:verifyToken" element={<Access />} />
    <Route path="display-cards" element={<DisplayProvider />}/>
  </Route>
);

export default PublicRoutes;
