import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CredentialProvider } from "./auth";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CredentialProvider>
        <Router>
          <App />
        </Router>
      </CredentialProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
