import { crew } from "../data/data";
import { Link } from "react-router-dom";
const Douglas = () => {
  const [douglas] = crew;
  const { img, cargo, descripcion, nombre, id } = douglas;
  return (
    <>
      {" "}
      <img
        src={img}
        style={{
          width: "55vw",
          margin: "2.5rem auto",
          display: "flex",
          marginBottom:"1rem",
          marginLeft:"5.8rem"
        }}
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
      <h3 className="crew-h3">{cargo.toUpperCase()}</h3>
      <h2 className="crew-h2">{nombre.toUpperCase()}</h2>
      <p className="crew-p">{descripcion}</p>
    </>
  );
};

export default Douglas;
