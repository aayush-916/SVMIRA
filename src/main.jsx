import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import Nav from "./Nav";
import Whatsapp from "./Whatsapp.jsx";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap everything inside BrowserRouter */}
      <Nav />
      <Whatsapp />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
