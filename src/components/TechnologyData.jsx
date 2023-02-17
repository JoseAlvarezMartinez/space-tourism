import { spacelaunch } from "../data/data";
import { Link } from "react-router-dom";

const TechnologyData = ({ tecnologiaInfo }) => {
  return (
    <>
      <h2 className="planetas-h2">
        02 <span>{"Space launch 101".toUpperCase()}</span>
      </h2>
      <img src={tecnologiaInfo.img} className="tecnologia-img" alt="" />
      <div className="tecnologia-centrar">
        {spacelaunch.map((tecnologia) => (
          <Link to={`/technology/${tecnologia.id}`} state={tecnologia}>
            {tecnologia.id}
          </Link>
        ))}
      </div>
    </>
  );
};

export default TechnologyData;
