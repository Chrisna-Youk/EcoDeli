import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const AuthContext = createContext("");

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const http = useAuth();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true); // true au départ

  useEffect(() => {
    const newAccessToken = async () => {
      try {
        const res = await http.get("/auth/refresh", { withCredentials: true });
        setAuth(res.data.accessToken);
      } catch (err) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    newAccessToken();
  }, [navigate, http]);

  if (loading) return null; // ou un <Loading />

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
