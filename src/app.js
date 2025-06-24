import { Provider, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";
import appStore from "./store/appStore";
import Credentials from "./components/Credentials";
import Dashboard from "./components/dashboardcomponents/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminSettings from "./components/adminsettingscomponents/AdminSettings";
import ServedVehicles from "./components/dashboardcomponents/ServedVehicles";
import AdminProfile from "./components/profilecomponents/AdminProfile";
import ServedVehicles from "./components/servedvehiclecomponents/ServedVehicles";
import ServicingVehicles from "./components/servicingvehiclescomponents/ServicingVehicles";
import Statistics from "./components/statisticscomponents/Statistics";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Credentials />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/servicingvehicles",
        element: <ServicingVehicles />,
      },
      {
        path: "/admin/servedvehicles",
        element: <ServedVehicles />,
      },
      {
        path: "/admin/statistics",
        element: <Statistics />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/settings",
        element: <AdminSettings />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
