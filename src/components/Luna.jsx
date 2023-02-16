import { data } from "../data/data";
import { Link } from "react-router-dom";
const Luna = () => {
  const [luna] = data;
  const { nombre, especificacion, distancia, viaje, img } = luna;
  return (
    <>
      {" "}
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
              {" "}
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
        <span>{"avg. distance".toUpperCase()}</span> {distancia.toUpperCase()}
      </p>
      <p className="planeta-distancia tiempo">
        {" "}
        <span>{"Est. travel time".toUpperCase()}</span> {viaje.toUpperCase()}
      </p>
    </>
  );
};

export default Luna;
