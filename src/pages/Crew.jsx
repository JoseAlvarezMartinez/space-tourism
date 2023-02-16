import { crew } from "../data/data";
import { Outlet, Link} from "react-router-dom";
const Crew = () => {
  return (
    <>
      <h2 className="planetas-h2">
        02 <span>{`Meet your crew`.toUpperCase()}</span>
      </h2>
      <Outlet />
    </>
  );
};

export default Crew;
