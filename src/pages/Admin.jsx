import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/admin/NavBar";

function Admin() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden h-screen w-screen">
      <NavBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
