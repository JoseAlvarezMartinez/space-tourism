import Logo from "../assets/shared/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
const Index = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="navegacion-superior">
        <img className="logotipo" src={Logo} alt="Logotipo de Space Tourism" />
        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="contenedor">
        <h1>{"so, you want to travel to".toUpperCase()} <span>{"space".toUpperCase()}</span></h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="circulo-blanco">
        <p>{"Explore".toUpperCase()}</p>
      </div>
    </header>
  );
};

export default Index;
