// React
import { BrowserRouter } from "react-router-dom";

// DevTools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Routes
import AppRoutes from "./routes/_index";

// Language Context
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n/i18n";
import { LanguageContext } from "./contexts/Context";

// ReactQuery Context
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/query";

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
