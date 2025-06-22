import { Provider, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";
import appStore from "./store/appStore";
import Credentials from "./components/Credentials";
import Dashboard from "./components/dashboardcomponents/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
