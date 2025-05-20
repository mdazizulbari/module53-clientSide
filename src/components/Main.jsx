import React from "react";
import { Link, Outlet } from "react-router";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
