import { crew } from "../data/data";
import { useLocation,useLoaderData } from "react-router-dom";
import CrewData from "../components/CrewData";
export function loader(){
  return crew
}
const Crew = () => {
  const location = useLocation();
  const data = useLoaderData()
  const [tripulante1] = data;
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
