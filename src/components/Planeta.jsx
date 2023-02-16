import { data } from "../data/data";
import { Link, useLocation } from "react-router-dom";
const Planeta = () => {
  const [luna] = data
  const { img, nombre, especificacion, distancia, viaje } = luna;
  const location = useLocation();
  return (
    <>
      {location.pathname === "/destination" ? (
        <>
          <img
            src={img}
            style={{
              width: "50vw",
              margin: "2.5rem auto",
              display: "flex",
            }}
          />
          <nav className="navegacion-planetas">
            <ul>
              {data.map((planeta) => (
                <li key={planeta.id}>
                  <Link to={`/destination/${planeta.id}`} state={planeta}>
                    {planeta.nombre.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="planeta-nombre">{nombre.toUpperCase()}</h2>
          <p className="planeta-especificacion">{especificacion}</p>
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
        </>
      ) : (
        <>
          <img
            src={location.state.img}
            style={{
              width: "50vw",
              margin: "2.5rem auto",
              display: "flex",
            }}
          />
          <nav className="navegacion-planetas">
            <ul>
              {data.map((planeta) => (
                <li key={planeta.id}>
                  <Link to={`/destination/${planeta.id}`} state={planeta}>
                    {planeta.nombre.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="planeta-nombre">{location.state.nombre.toUpperCase()}</h2>
          <p className="planeta-especificacion">{location.state.especificacion}</p>
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
        </>
      )}
    </>
  );
};

export default Planeta;
