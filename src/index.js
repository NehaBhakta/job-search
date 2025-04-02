import { useEffect } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error from "./pages/Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";

const Applayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="header-box">
        <App />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/MyJobs",
        element: <Error />,
      },
      {
        path: "/Subscribe",
        element: <Error />,
      },
      {
        path: "/Signin",
        element: <Error />,
      },
      {
        path: "/ForEmployer",
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
