import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./sidenav.css"
export default function SideNavigation() {
  const navRef = useRef<HTMLElement | null>(null);
  const [navClose, setNavClose] = useState(false);

  const toggleNav = () => {
    if ( navRef?.current?.style.flex === "0 1 0%") {
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

  };
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
     {!navClose && <nav
        className="nav_container"
        ref={navRef}
        style={{
          width: navClose ? "0px" : "100%",
          display: navClose ? "none" : "block",
        }}
      >
        <ul className="nav-ul">
          {/* <li>
            <Link to={`test`} onClick={() => toggleNav()}>
              Test Component
            </Link>
          </li> */}
          <li>
            <Link to={`autocomplete`} onClick={() => toggleNav()}>
              Auto complete
            </Link>
          </li>
        </ul>
        <div className="close-btn-container">
          <button className="close-btn color-light" onClick={() => toggleNav()}>
            Close
          </button>
        </div>
      </nav>}
    </>
  );
}
