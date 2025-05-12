// React
import { Outlet } from "react-router-dom";

// Layout components
import CustomerHeader from "./header/CustomerHeader";

const PublicLayout = () => {
  return (
    <>
      <CustomerHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
