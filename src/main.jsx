import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/childcomponents/Header";
import MainParent from "./components/MainParent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainParent />
  </StrictMode>
);
