import { useRef, useState } from "react";
import "./global.css";
import { Link, Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
export const GlobalLayout = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const navList = useRef<HTMLUListElement | null>(null);
  const [navClose, setNavClose] = useState(false);

  const toggleNav = () => {
    setNavClose((prev) => !prev);
    console.log(navRef.current?.style.flex);
    if (navList.current && navRef?.current?.style.flex === "0 1 0%") {
      navRef.current.style.flex = "1 1 0%";
      navList.current.style.visibility = "visible";
    } else if (
      navRef.current &&
      navList.current &&
      (navRef.current.style.flex === "" ||
        navRef.current.style.flex === "1 1 0%")
    ) {
      navRef.current.style.flex = "0";
      navList.current.style.visibility = "hidden";
    }
  };

  return (
    <>
      <div className="main-layout-container">
        <div className="app-container">
          {
            navClose &&  
            <Bars3Icon height={20} width={20}  onClick={() => toggleNav()} className="close-btn-mobile"/>
          }
          <nav className="nav-container" ref={navRef} style={{width:navClose ? '0px' : "100%", display:navClose?'none':'block'}}>
            <ul ref={navList} className="nav-ul">
              <li>
                <Link to={`test`} onClick={() => toggleNav()}>Test Component</Link>
              </li>
              <li>
                <Link to={`autocomplete`} onClick={() => toggleNav()}>Auto complete</Link>
              </li>
            </ul>
            <div className="close-btn-container">
              <button
                className="close-btn color-light"
                onClick={() => toggleNav()}
              >
                Close
              </button>
            </div>
          </nav>
          <div className="main-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
