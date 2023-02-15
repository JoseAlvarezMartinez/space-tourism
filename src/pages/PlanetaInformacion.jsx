import { useLocation, Link } from "react-router-dom";
import { data } from "../data/data";
const PlanetaInformacion = () => {
  const location = useLocation();
  return (
    <>
      <img
        className="planeta-imagen"
        src={location.state.img}
        alt={`Imagen de ${location.state.nombre}`}
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
      <h2 className="planeta-nombre">{location.state.nombre.toUpperCase()}</h2>
      <p className="planeta-especificacion">{location.state.especificacion}</p>
    </>
  );
};

export default PlanetaInformacion;
