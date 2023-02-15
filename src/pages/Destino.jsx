import {data} from "../data/data"
const Destino = () => {
  return (
    <div className="planetas">
        <h2 className="planetas-h2">01 <span>Pick your destination</span></h2>
        {data.map(planeta => (
            <p>{planeta.nombre}</p>
        ))}
    </div>
  )
}

export default Destino