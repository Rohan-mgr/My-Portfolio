import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Main from "./Main";
// import { getCurrentUser } from "../../services/auth";
// import { _getSecureLs, _removeAllLs } from "../../helper/storage";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const expiryDate = _getSecureLs("auth")?.expiryDate;
  //   console.log(expiryDate);

  //   const remainingMilliseconds =
  //     new Date(expiryDate).getTime() - new Date().getTime();
  //   console.log(remainingMilliseconds);
  //   setAutoLogout(remainingMilliseconds);
  // }, []);

  // const setAutoLogout = (remainingTime) => {
  //   setTimeout(() => {
  //     _removeAllLs();
  //     navigate("/login");
  //   }, remainingTime);
  // };

  // const fetchUser = async () => {
  //   const user = await getCurrentUser();
  //   if (user) {
  //     setUser(user);
  //   }
  // };

  useEffect(() => {
    // fetchUser();
    navigate("/admin/dashboard/welcome");
  }, []);

  // console.log(user);

  return (
    <div className="wrapper">
      <Header />
      <SideNav />
      <Main />
    </div>
  );
}

export default Dashboard;
