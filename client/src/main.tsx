import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./app/store.ts";
import { Provider as ReduxProvider } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ChakraProvider>
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>
);
