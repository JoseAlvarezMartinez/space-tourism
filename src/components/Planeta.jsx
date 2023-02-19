import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { data } from "../data/data";
export function loader() {
  return data;
}
const Planeta = () => {
  const infoPlaneta = useLoaderData();
  const [luna] = infoPlaneta;
  const { img, nombre, especificacion, distancia, viaje } = luna;
  const location = useLocation();
  const params = useParams();
  return (
    <>
      <h2 className="planetas-h2">
        01 <span>{"Pick your destination".toUpperCase()}</span>
      </h2>
      {location.pathname === "/destination" ? (
        <>
          <img src={img} className={"planeta-img"} />
          <nav className="navegacion-planetas">
            <ul>
              {infoPlaneta.map((planeta) => (
                <li key={planeta.id}>
                  <Link
                    className={`
                  ${planeta.nombre === "Moon" ? "activo" : ""}`}
                    to={`/destination/${planeta.id}`}
                    state={planeta}
                  >
                    {planeta.nombre.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="planeta-nombre">{nombre.toUpperCase()}</h2>
          <p className="planeta-especificacion">{especificacion}</p>
          <div className="tablet-contenedor">
            <p className="planeta-distancia">
              {" "}
              <span>{"avg. distance".toUpperCase()}</span>{" "}
              {distancia.toUpperCase()}
            </p>
            <p className="planeta-distancia tiempo">
              {" "}
              <span>{"Est. travel time".toUpperCase()}</span>{" "}
              {viaje.toUpperCase()}
            </p>
          </div>
        </>
      ) : (
        <>
          <img className="planeta-img" src={location.state.img} />
          <nav className="navegacion-planetas">
            <ul>
              {infoPlaneta.map((planeta) => (
                <li key={planeta.id}>
                  <Link
                    className={`${
                      planeta.id === Number(params.id) ? "activo" : ""
                    }`}
                    to={`/destination/${planeta.id}`}
                    state={planeta}
                  >
                    {planeta.nombre.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="planeta-nombre">
            {location.state.nombre.toUpperCase()}
          </h2>
          <p className="planeta-especificacion">
            {location.state.especificacion}
          </p>
          <div className="tablet-contenedor">
            <p className="planeta-distancia">
              {" "}
              <span>{"avg. distance".toUpperCase()}</span>{" "}
              {location.state.distancia.toUpperCase()}
            </p>
            <p className="planeta-distancia tiempo">
              {" "}
              <span>{"Est. travel time".toUpperCase()}</span>{" "}
              {location.state.viaje.toUpperCase()}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Planeta;
