import { Suspense, lazy } from "react";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          element: <Navigate to={DEFAULT_PATH} replace />,
          index: true,
        },
        {
          path: "app",
          element: <GeneralApp />,
        },
        {
          path: "404",
          element: <Page404 />,
        },
        {
          path: "*",
          element: <Navigate to="/404" replace />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
};
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

export default Router;
