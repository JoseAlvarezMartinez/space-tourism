import { useLocation, Link } from "react-router-dom";
import { crew } from "../data/data";
const InformacionCrew = () => {
  const location = useLocation();
  return (
    <>
      {" "}
      <img
        src={location.state.img}
        className={`${
          location.state.cargo == "Commander" ? "douglas" : "tripulacion"
        }`}
      />
      <div className="circulo-contenedor">
        {crew.map((integrante) => (
          <Link
            to={`/crew/${integrante.id}`}
            state={integrante}
            key={integrante.id}
            className={`circulo-navegacion`}
          ></Link>
        ))}
      </div>
      <h3 className="crew-h3">{location.state.cargo.toUpperCase()}</h3>
      <h2 className="crew-h2">{location.state.nombre.toUpperCase()}</h2>
      <p className="crew-p">{location.state.descripcion}</p>
    </>
  );
};

export default InformacionCrew;
