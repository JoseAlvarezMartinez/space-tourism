import { Link } from "react-router-dom";
const Presentacion = () => {
  return (
    <>
      <div className="contenedor">
        <h1>
          {"so, you want to travel to".toUpperCase()}{" "}
          <span>{"space".toUpperCase()}</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="circulo-blanco">
        <Link to={"/destination/1"}>{"Explore".toUpperCase()}</Link>
      </div>
    </>
  );
};

export default Presentacion;
