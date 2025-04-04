// React
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Auth & Theme context
import { AuthContext, ThemeContext } from "../context/Context";

// Third
import axios from "axios";

const PrivateLayout = () => {
  // // useState and useEffect with API axios call

  // const [auth, setAuth] = useState("");

  // useEffect(() => {
  //   setAuth(() => {
  //     axios
  //       .post("http://localhost:3000/api/v1/login", {
  //         email: "jeanalbalouh@gmail.com",
  //         password: "Admin123?WowBro",
  //       })
  //       .then((res) => {
  //         console.log(res.data.verifyToken);
  //       });
  //   });
  // }, []);

  return (
    <div>
      <header></header>
      {/* <AuthContext.Provider value={auth}> */}
        <ThemeContext.Provider value={null}>
          <main>
            <Outlet/>
          </main>
        </ThemeContext.Provider>
      {/* </AuthContext.Provider> */}
    </div>
  );
};

export default PrivateLayout;
