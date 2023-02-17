import { spacelaunch } from "../data/data";
import { Link, useLocation, useParams } from "react-router-dom";

const TechnologyData = ({ tecnologiaInfo }) => {
  const location = useLocation();
  const params = useParams();

  return (
    <>
      <h2 className="planetas-h2">
        02 <span>{"Space launch 101".toUpperCase()}</span>
      </h2>
      <img src={tecnologiaInfo.img} className="tecnologia-img" alt="" />
      <div className="tecnologia-centrar">
        {spacelaunch.map((tecnologia) => (
          <Link
            className={`tecnologia-navegacion ${
              location.pathname === "/technology"
                ? "tecnologia-navegacion-activa-child"
                : ""
            } ${
              Number(params.id) === tecnologia.id
                ? "tecnologia-navegacion-activa"
                : ""
            }`}
            key={tecnologia.id}
            to={`/technology/${tecnologia.id}`}
            state={tecnologia}
          >
            {tecnologia.id}
          </Link>
        ))}
      </div>
      <h2 className="technology-h2">{"The terminology".toUpperCase()}</h2>
      <h1 className="technology-h1">{tecnologiaInfo.titulo.toUpperCase()}</h1>
      <p className="technology-p">{tecnologiaInfo.descripcion}</p>
    </>
  );
};

export default TechnologyData;
