import React, { useState, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader/Preloader";
import Home from "./Pages/Home/Home";

const ResetPassword = React.lazy(() =>
  import("./Components/ResetPassword/ResetPassword")
);
const NewPassword = React.lazy(() =>
  import("./Components/ResetPassword/NewPassword")
);

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <div className="App">
      {loading ? (
        <div className="Preloader">
          <Preloader />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/forget-password"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <ResetPassword />
              </Suspense>
            }
          />
          <Route
            path="/new-password/:id/:token"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <NewPassword />
              </Suspense>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
