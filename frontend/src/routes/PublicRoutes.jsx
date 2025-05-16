// React
import { Route } from "react-router-dom";

// Layout
import PublicLayout from "../layout/PublicLayout";

// Pages
import HomePublic from "../pages/public/HomePublic";
import DisplayProvider from "../pages/TO_IMPLEMENT/DisplayProvider";

const PublicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<HomePublic />} />
    <Route path="display-cards" element={<DisplayProvider />}/>
  </Route>
);

export default PublicRoutes;
