import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context";
import Axios from "../../utils/axios";
import { jwtDecode } from "jwt-decode";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newAccessToken = async () => {
      try {
        const res = await Axios.get("/auth/refresh");
        const token = res.data.accessToken;
        const decoded = jwtDecode(token);

        const currentTime = Math.floor(Date.now() / 1000);
        // console.log(currentTime)
        // console.log(decoded.exp)

        if (decoded.exp < currentTime) {
          localStorage.removeItem("refreshToken");
          navigate("/login");
          return;
        }

        setAuth(token);
        // console.log("Token valide jusqu’à :", new Date(decoded.exp * 1000));
      } catch (error) {
        // console.error("Erreur lors du refresh token :", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    newAccessToken();
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
