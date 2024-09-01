import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestrauntComponent from "./components/RestrauntComponent";

const App = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <BodyComponent />,
      },
      {
        path: "/About",
        element: <AboutComponent />,
      },
      {
        path: "/Contact",
        element: <ContactComponent />,
      },
      {
        path: "/Restraunt/:resId",
        element: <RestrauntComponent />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
