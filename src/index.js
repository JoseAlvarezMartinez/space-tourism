import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Presentacion from "./pages/Presentacion";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Planetas from "./pages/Planetas";
import PlanetaInformacion from "./pages/PlanetaInformacion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        index: true,
        element: <Presentacion />,
      },
      {
        path: "/destination",
        element: <Planetas />,
        children: [
          {
            path: "/destination/:id",
            element: <PlanetaInformacion />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
