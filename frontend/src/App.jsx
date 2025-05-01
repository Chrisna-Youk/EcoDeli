// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// DevTools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Layouts
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

// Pages
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

// Language context
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n/i18n";
import { LanguageContext } from "./context/Context";
import ForgotPassword from "./pages/Forgot-Password";

// ReactQuery context
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <LanguageContext.Provider value={navigator.language}>
          <Routes>

            {/* Public Layout and its nested routes */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} /> {/* Or another default route */}
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>

            {/* Private Layout and its nested routes */}
            <Route path="/dashboard" element={<PrivateLayout />}>
              <Route index element={<Home />} />
              <Route path="service" element={<Service />} />
              <Route path="users" element={<Users />} />
            </Route>

          </Routes>
        </LanguageContext.Provider>
        </QueryClientProvider>
    </BrowserRouter>
  );
};


export default App;
