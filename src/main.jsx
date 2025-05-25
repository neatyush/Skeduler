import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./Landing Page/LandingPage.jsx";
import EmployeePage from "./Staff Area/EmployeePage.jsx";
import Error from "./Error.jsx";
import StaffList from "./Owner/StaffList.jsx";
import Dashboard from "./Owner/Dashboard.jsx";
import Leave from "./Owner/Leave.jsx";
import Report from "./Owner/Report.jsx";
import Schedule from "./Owner/Schedule.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "stafflist",
        element: <StaffList />,
      },
      {
        path: "leave",
        element: <Leave />,
      },
      {
        path: "reports",
        element: <Report />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
    ],
  },
  {
    path: "/user-login",
    element: <EmployeePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
