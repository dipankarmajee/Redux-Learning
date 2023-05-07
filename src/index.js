import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(<App />);
