import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import SSMotorsAboutUs from "./components/SSMotorsAboutUs";
import SSMotorsBody from "./components/SSMotorsBody";
import SSMotorsContactUs from "./components/SSMotorsContactUs";
import SSMotorsLogin from "./components/SSMotorsLogin";
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
        element: <SSMotorsBody />,
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
