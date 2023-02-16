import { spacelaunch } from "../data/data";
import { Link } from "react-router-dom";

const Technology = () => {
  const [despegue] = spacelaunch;
  const { titulo, descripcion, id, img } = despegue;
  console.log(despegue);
  return (
    <>
      <h2 className="planetas-h2">
        02 <span>{`space launch 101`.toUpperCase()}</span>
      </h2>
      <img className="technology-img" src={img} alt="" />
      {spacelaunch.map((accion) =>(
        <Link >{accion.titulo}</Link>
        ))}
    </>
  );
};

export default Technology;
