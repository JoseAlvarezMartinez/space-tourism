import { spacelaunch } from "../data/data";
import { useLocation,useLoaderData } from "react-router-dom";
import TechnologyData from "../components/TechnologyData";
export function loader(){
  return spacelaunch
}
const Technology = () => {
  const location = useLocation();
  const datos = useLoaderData()
  const [despegue] = datos;
  return (
    <>
      {location.pathname === "/technology" ? (
        <TechnologyData tecnologiaInfo={despegue} />
      ) : (
        <>
          <TechnologyData tecnologiaInfo={location.state} />
        </>
      )}
    </>
  );
};

export default Technology;
