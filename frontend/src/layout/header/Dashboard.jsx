import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
