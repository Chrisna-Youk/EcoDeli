import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context";
import Axios from "../../utils/axios";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newAccessToken = async () => {
      try {
        const res = await Axios.get("/auth/refresh");
        setAuth(res.data.accessToken);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    newAccessToken();
  }, [navigate]);

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
