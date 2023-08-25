import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidenav.css";
export default function SideNavigation() {
  const navRef = useRef<HTMLElement | null>(null);
  const [navClose, setNavClose] = useState(window.innerWidth < 600);

  const toggleNav = () => {
    if (document.body.clientWidth < 600) {

      if (navRef?.current?.style.flex === "0 1 0%") {
        navRef.current.style.flex = "1 1 0%";
        navRef.current.style.display = "inline-flex";
      } else if (
        navRef.current &&
        (navRef.current.style.flex === "" ||
          navRef.current.style.flex === "1 1 0%")
      ) {
        navRef.current.style.flex = "0";
        navRef.current.style.display = "none";
      }
      setNavClose((prev) => !prev);
    }
  };

  const checkResize = () => {
    if (document.body.clientWidth >= 600) {
      setNavClose(false);
    } else {
      setNavClose(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkResize);
    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, [window.innerWidth]);
  return (
    <>
      {navClose && (
        <div className="floating_toggle">
          <Bars3Icon
            height={30}
            width={30}
            onClick={() => toggleNav()}
            className="close-btn-mobile"
          />
        </div>
      )}
      {!navClose && (
        <nav
          className="nav_container"
          ref={navRef}
          style={{
            width: navClose ? "0px" : "100%",
            display: navClose ? "none" : "block",
          }}
        >
          <ul className="nav-ul">
            <li >
              <NavLink
                to={`autocomplete`}
                onClick={() => toggleNav()}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "notactive"
              }
              >
                Auto complete
              </NavLink>
            </li>
            <li >
              <NavLink
                to={`button`}
                onClick={() => toggleNav()}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "notactive"
              }
              >
               Buttons
              </NavLink>
            </li>
            <li >
              <NavLink
                to={`checkbox`}
                onClick={() => toggleNav()}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "notactive"
              }
              >
               Checkbox
              </NavLink>
            </li>
            <li >
              <NavLink
                to={`radiogroup`}
                onClick={() => toggleNav()}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "notactive"
              }
              >
               Radio Group
              </NavLink>
            </li>
            <li >
              <NavLink
                to={`rating`}
                onClick={() => toggleNav()}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "notactive"
              }
              >
               Rating
              </NavLink>
            </li>
            <li >
              <NavLink
                to={`tree`}
                onClick={() => toggleNav()}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "notactive"
              }
              >
               Tree
              </NavLink>
            </li>
          </ul>
          <div className="close-btn-container">
            <button
              className="close-btn"
              onClick={() => toggleNav()}
            >
              Close
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
