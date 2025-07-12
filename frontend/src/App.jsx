// React
import { BrowserRouter } from "react-router-dom";

// DevTools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Routes
import AppRoutes from "./routes/_index";

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
