import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import ErrorComponent from "./components/ErrorComponent";
import ShimmerComponent from "./components/ShimmerComponent";
import '@fortawesome/fontawesome-free/css/all.min.css';

const BodyComponent = lazy(() => import("./components/BodyComponent"));
const AboutComponent = lazy(() => import("./components/AboutComponent"));
const ContactComponent = lazy(() => import("./components/ContactComponent"));
const RestrauntComponent = lazy(() =>
  import("./components/RestrauntComponent")
);

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
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <BodyComponent />
          </Suspense>
        ),
      },
      {
        path: "/About",
        element: (
          <Suspense fallback="Loading...">
            <AboutComponent />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback="Loading...">
            <ContactComponent />
          </Suspense>
        ),
      },
      {
        path: "/Restraunt/:resId",
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <RestrauntComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
