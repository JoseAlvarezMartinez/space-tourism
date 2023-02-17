import { Link } from "react-router-dom";
import { crew } from "../data/data";
const CrewData = ({ tripulante }) => {
  return (
    <>
        <h2 className="planetas-h2">02 <span>{"Meet your crew".toUpperCase()}</span></h2>
      <img
        src={tripulante.img}
        className={`${
          tripulante.nombre.includes("Douglas") ? "douglas" : "tripulacion"
        }`}
        alt=""
      />
      <div className="contenedor-navegacion-tripulantes">
        {crew.map((tripulante) => (
          <Link
            key={tripulante.id}
            to={`/crew/${tripulante.id}`}
            className="circulo-navegacion"
            state={tripulante}
          >
            
          </Link>
        ))}
      </div>
      <h3 className="crew-h3">{tripulante.cargo.toUpperCase()}</h3>
      <h2 className="crew-h2">{tripulante.nombre.toUpperCase()}</h2>
      <p className="crew-p">{tripulante.descripcion}</p>
    </>
  );
};

export default CrewData;
