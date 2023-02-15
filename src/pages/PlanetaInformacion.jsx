import { useLocation,Link} from "react-router-dom";
import {data} from "../data/data"
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
      <h2>{location.state.nombre.toUpperCase()}</h2>
    </>
  );
};

export default PlanetaInformacion;
