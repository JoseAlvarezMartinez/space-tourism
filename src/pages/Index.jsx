import Logo from "../assets/shared/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Index = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [useLocation()]);
  return (
    <>
      <header
        className={`${
          (location.pathname === "/" && "presentacion") ||
          (location.pathname.includes("/destination") && "planetas")||
          (location.pathname.includes("/crew") && "crew")
        } `}
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
        {location.pathname === "/" && (
          <div className="contenedor">
            <h1>
              {"so, you want to travel to".toUpperCase()}{" "}
              <span>{"space".toUpperCase()}</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>

            <div className="circulo-blanco">
              <Link to={"/destination"}>{"Explore".toUpperCase()}</Link>
            </div>
          </div>
        )}
        <Outlet />
      </header>
    </>
  );
};

export default Index;
