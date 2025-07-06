// React
import { Outlet } from "react-router-dom";

// Layout components
import PublicHeader from "./header/PublicHeader";

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
