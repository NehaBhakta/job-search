import { useEffect } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error from "./pages/Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout component
const Applayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="header-box">
      <App />
      <Outlet />
    </div>
  );
};

// HashRouter version of routes
const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<Applayout />}>
      <Route path="MyJobs" element={<Error />} />
      <Route path="Subscribe" element={<Error />} />
      <Route path="Signin" element={<Error />} />
      <Route path="ForEmployer" element={<Error />} />
    </Route>
  </Routes>
);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <RootRoutes />
  </HashRouter>
);
