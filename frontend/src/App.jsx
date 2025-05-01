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
import Login from "./pages/auth/Login";

// Language context
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n/i18n";
import { LanguageContext } from "./context/Context";

// ReactQuery context
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
  console.log(import.meta.env);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <LanguageContext.Provider value={navigator.language}>
          <Routes>
            <Route path="/" element={<PublicLayout />} />
              <Route path="login" element={<Login />}>
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/dashboard" element={<PrivateLayout />}>
              <Route index element={<Home />} />
              <Route path="/dashboard/service" element={<Service />} />
            </Route>
          </Routes>
        </LanguageContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
