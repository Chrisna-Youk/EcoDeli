// React
import { Route } from "react-router-dom";

// Layout
import PublicLayout from "../layout/PublicLayout";

// Pages
import HomePublic from "../pages/public/HomePublic";

const PublicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<HomePublic />} />
  </Route>
);

export default PublicRoutes;
