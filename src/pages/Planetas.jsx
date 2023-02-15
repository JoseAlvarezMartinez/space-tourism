import { Link, Outlet, useLocation } from "react-router-dom";
import { data } from "../data/data";

const Planetas = () => {
  const [luna] = data;
  const location = useLocation();
  return (
    <>
      <h2 className="planetas-h2">
        01 <span>{`Pick your destination`.toUpperCase()}</span>
      </h2>
      {location.pathname === "/destination" && (
        <>
          <img
            src={luna.img}
            style={{ width: "50vw", margin: "2.5rem auto", display: "flex" }}
          />
          <nav className="navegacion-planetas">
            <ul>
              {data.map((planeta) => (
                <li key={planeta.id}>
                  {" "}
                  <Link to={`/destination/${planeta.id}`} state={planeta}>
                    {planeta.nombre.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="planeta-nombre">{luna.nombre.toUpperCase()}</h2>
          <p className="planeta-especificacion">{luna.especificacion}</p>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Planetas;
