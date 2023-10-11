import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import {CredentialProvider} from './auth'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CredentialProvider>
      <Router>
        <App />
      </Router>
    </CredentialProvider>
  </React.StrictMode>
);
