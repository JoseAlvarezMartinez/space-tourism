import Logo from "../assets/shared/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Index = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [useLocation().pathname]);
  return (
    <>
      <header
        className={`${
          useLocation().pathname === "/destination" 
            ? "planetas"
            : "presentacion"
        }`}
      >
        <div className="navegacion-superior">
          <Link to={"/"}>
            <img
              className="logotipo"
              src={Logo}
              alt="Logotipo de Space Tourism"
            />
          </Link>
          <div className="menu">
            <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <nav
          className={`${isOpen ? "navegacion-activa" : "navegacion-inactiva"}`}
        >
          <ul>
            <li>
              <Link to={"/"}>
                <span>00</span> {"Home".toUpperCase()}
              </Link>
            </li>

            <li>
              <Link to={"/destination"}>
                <span>01</span> {"Destination".toUpperCase()}
              </Link>
            </li>

            <li>
              <Link to={"/crew"}>
                <span>02</span> {"crew".toUpperCase()}
              </Link>
            </li>
            <li>
              <Link to={"/technology"}>
                <span>03</span> {"technology".toUpperCase()}
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </>
  );
};

export default Index;
