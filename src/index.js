import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Planeta from "./components/Planeta";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/destination",
        element: <Planeta />,
      },
      {
        path: "/destination/:id",
        element: <Planeta />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path:"/crew/:id",
        element:<Crew/>
      },
      {
        path:"/technology",
        element:<Technology />
      },
      {
        path:"/technology/:id",
        element:<Technology />
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
