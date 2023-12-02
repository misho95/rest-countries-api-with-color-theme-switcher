import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components";
import Container from "./components/container";
import Header from "./components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Container>
          <Index />
        </Container>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
