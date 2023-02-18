import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Planeta from "./components/Planeta";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { loader as SpaceLaunchLoader } from "./pages/Technology";
import { loader as CrewLoader } from "./pages/Crew";
import { loader as PlanetaLoader } from "./components/Planeta";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/destination",
        element: <Planeta />,
        loader:PlanetaLoader
      },
      {
        path: "/destination/:id",
        element: <Planeta />,
        loader:PlanetaLoader
      },
      {
        path: "/crew",
        element: <Crew />,
        loader: CrewLoader,
      },
      {
        path: "/crew/:id",
        element: <Crew />,
        loader: CrewLoader,
      },
      {
        path: "/technology",
        element: <Technology />,
        loader: SpaceLaunchLoader,
      },
      {
        path: "/technology/:id",
        element: <Technology />,
        loader: SpaceLaunchLoader,
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
