import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
