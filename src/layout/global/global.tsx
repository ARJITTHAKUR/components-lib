import { useRef, useState } from "react";
import "./global.css";
import { Link, Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SideNavigation from "../../components/sideNav/sidenav";

export const GlobalLayout = () => {


  return (
    <>
      <div className="main-layout-container">
        <div className="app-container">
          <SideNavigation/>
          <div className="main-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
