import { spacelaunch } from "../data/data";
import { useLocation } from "react-router-dom";
import TechnologyData from "../components/TechnologyData";
const Technology = () => {
  const location = useLocation();
  const [despegue] = spacelaunch;
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
