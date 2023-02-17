import { crew } from "../data/data";
import { useLocation } from "react-router-dom";
import CrewData from "../components/CrewData";
const Crew = () => {
  const [tripulante1] = crew;
  const location = useLocation();
  return (
    <>
      {location.pathname === "/crew" ? (
        <CrewData tripulante={tripulante1} />
      ) : (
        <>
          <CrewData tripulante={location.state} />
        </>
      )}
    </>
  );
};

export default Crew;
