import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import posts from "./components/posts.jsx";
import Main from "./components/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [{ path: "/posts", Component: posts }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
