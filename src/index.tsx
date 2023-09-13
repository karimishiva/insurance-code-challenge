import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const stylis = require("stylis");
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [stylis.prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "var(--font-default)",
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
