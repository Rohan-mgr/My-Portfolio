import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MySpinner from "./Components/Spinner/Spinner";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const ResetPassword = React.lazy(() =>
  import("./Components/ResetPassword/ResetPassword")
);
const NewPassword = React.lazy(() =>
  import("./Components/ResetPassword/NewPassword")
);
const AdminLogin = React.lazy(() => import("./Pages/Login/Login"));
const Dashboard = React.lazy(() => import("./Pages/Admin/Dashboard"));
const Page404 = React.lazy(() => import("./Pages/404/404"));

// pages that can be viewed by admin after logged in
const Projects = React.lazy(() =>
  import("./Pages/Admin/Admin-Views/Projects/Projects")
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<MySpinner spinnerSize="lg" />}>
              <AdminLogin />
            </Suspense>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="welcome" element={<p>dashboard</p>} />
          <Route
            path="projects"
            element={
              <Suspense fallback={<MySpinner spinnerSize="lg" />}>
                <Projects />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/forget-password"
          element={
            <Suspense fallback={<MySpinner spinnerSize="lg" />}>
              <ResetPassword />
            </Suspense>
          }
        />
        <Route
          path="/new-password/:id/:token"
          element={
            <Suspense fallback={<MySpinner spinnerSize="lg" />}>
              <NewPassword />
            </Suspense>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
