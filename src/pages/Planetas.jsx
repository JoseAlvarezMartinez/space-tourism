import {  Outlet} from "react-router-dom";
const Planetas = () => {
  return (
    <>
      <h2 className="planetas-h2">
        01 <span>{`Pick your destination`.toUpperCase()}</span>
      </h2>
      <Outlet />
    </>
  );
};

export default Planetas;
