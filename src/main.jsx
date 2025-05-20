import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Posts from "./components/posts.jsx";
import Main from "./components/Main.jsx";
import Post from "./components/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        path: "/posts",
        Component: Posts,
        loader: () => fetch("http://localhost:5000/posts/"),
      },
      {
        path: "/posts/:id",
        Component: Post,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
