import { useState, useEffect } from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const data = useQuery({
    queryKey: ["data1"],
    queryFn: loginHandler,
  });

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <div>
      <form>
        <label>Email :</label>
        <input type="email" />
        <label>Password :</label>
        <input type="password" />
        <button type="submit" onClick={(e) => loginHandler(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

// const [auth, setAuth] = useState("");

// useEffect(() => {
//   setAuth((e) => {
//     e.preventDefault();
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
