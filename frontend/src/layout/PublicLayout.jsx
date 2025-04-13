import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/Context";

const PublicLayout = () => {
  return (
    <div>
      <header></header>
      <ThemeContext.Provider value="dark">
        <main>
          <Outlet/>
        </main>
      </ThemeContext.Provider>
    </div>
  );
};

export default PublicLayout;
