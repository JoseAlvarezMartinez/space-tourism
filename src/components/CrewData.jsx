import { Link, useLocation, useParams,useLoaderData } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const CrewData = ({ tripulante }) => {
  const tablet = useMediaQuery({ query: "(min-width: 650px)" });
  const data = useLoaderData()
  const location = useLocation();
  const params = useParams();
  return (
    <>
      <h2 className="planetas-h2">
        02 <span>{"Meet your crew".toUpperCase()}</span>
      </h2>
      {!tablet && <>  <div className="contenedor-img">
        <img
          src={tripulante.img}
          className={`${
            tripulante.nombre.includes("Douglas") ? "douglas" : "tripulacion"
          }`}
          alt=""
        />
      </div>
      
      <div className="contenedor-navegacion-tripulantes">
      {data.map((tripulante) => (
        <Link
          key={tripulante.id}
          to={`/crew/${tripulante.id}`}
          className={` 
          ${
            location.pathname === "/crew" &&
            tripulante.nombre === "Douglas Hurley"
              ? "circulo-activo"
              : ""
          }
            ${
              tripulante.id === Number(params.id)
                ? "circulo-activo "
                : "circulo-navegacion"
            } `}
          state={tripulante}
        ></Link>
      ))}
    </div>
      </>
      }

      <h3 className="crew-h3">{tripulante.cargo.toUpperCase()}</h3>
      <h2 className="crew-h2">{tripulante.nombre.toUpperCase()}</h2>
      <p className="crew-p">{tripulante.descripcion}</p>
      {tablet &&  <div className="contenedor-navegacion-tripulantes">
        {data.map((tripulante) => (
          <Link
            key={tripulante.id}
            to={`/crew/${tripulante.id}`}
            className={` 
            ${
              location.pathname === "/crew" &&
              tripulante.nombre === "Douglas Hurley"
                ? "circulo-activo"
                : ""
            }
              ${
                tripulante.id === Number(params.id)
                  ? "circulo-activo "
                  : "circulo-navegacion"
              } `}
            state={tripulante}
          ></Link>
        ))}
      </div>}
      {tablet &&  <div className="contenedor-img">
        <img
          src={tripulante.img}
          className={`${
            tripulante.nombre.includes("Douglas") ? "douglas" : "tripulacion"
          }`}
          alt=""
        />
        
      </div>
      }
    </>
  );
};

export default CrewData;
