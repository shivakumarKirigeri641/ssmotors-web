import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import SSMotorsAboutUs from "./components/SSMotorsAboutUs";
import SSMotorsLogin from "./components/customComponents/SSMotorsLogin";
import SSMotorsHome from "./components/SSMotorsHome";
import SSMotorsContactUs from "./components/SSMotorsContactUs";
import SSMotorsHeader from "./components/SSMotorsHeader";
import SSMotorsFooter from "./components/SSMotorsFooter";
import ssMotorsStore from "./store/ssMotorsStore";
import { Provider } from "react-redux";
const AppLayout = () => {
  return (
    <Provider store={ssMotorsStore}>
      <div>
        <SSMotorsHeader />
        <Outlet />
        <SSMotorsFooter />
      </div>
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
        element: <SSMotorsHome />,
      },
      {
        path: "/login",
        element: <SSMotorsLogin />,
      },
      {
        path: "/aboutus",
        element: <SSMotorsAboutUs />,
      },
      {
        path: "/contactus",
        element: <SSMotorsContactUs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
