import { useRef, useState } from "react";
import "./global.css";
import { Link, Outlet } from "react-router-dom";
export const GlobalLayout = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const navList = useRef<HTMLUListElement | null>(null);
  const [navClose, setNavClose] = useState(false);


  const toggleNav = () => {
    setNavClose((prev) => !prev);
    console.log(navRef.current?.style.flex);
    if (navList.current && navRef?.current?.style.flex === "0 1 0%") {
      navRef.current.style.flex = "1 1 0%";
      navList.current.style.visibility = 'visible'
    } else if (
      navRef.current && navList.current &&
      (navRef.current.style.flex === "" ||
        navRef.current.style.flex === "1 1 0%")
    ) {
      navRef.current.style.flex = "0";
      navList.current.style.visibility = 'hidden'
    }
  };


  return (
    <>
      <div className="app-container">
        <nav className="nav-container" ref={navRef}>
          <ul ref={navList} className="nav-ul">
            {/* <li>first</li>
            <li>first</li>
            <li>first</li>
            <li>first</li> */}
            <li>
            <Link to={`test`}>Test Component</Link>
            </li>
            <li>
            <Link to={`autocomplete`}>Auto complete</Link>
            </li>

          </ul>
          <div className="close-btn-container">
            <button className="close-btn color-light" onClick={() => toggleNav()}>
              Close
            </button>
          </div>
        </nav>
        <div className="main-container">
          <Outlet/>
        </div>
      </div>
    </>
  );
};
