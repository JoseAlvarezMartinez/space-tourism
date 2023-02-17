import Luna from "../assets/destination/image-moon.webp";
import Marte from "../assets/destination/image-mars.webp";
import Europa from "../assets/destination/image-europa.webp";
import Titan from "../assets/destination/image-titan.webp";
import Douglas from "../assets/crew/image-douglas-hurley.webp";
import Mark from "../assets/crew/image-mark-shuttleworth.webp";
import Victor from "../assets/crew/image-victor-glover.webp";
import Anousheh from "../assets/crew/image-anousheh-ansari.webp";
import Despegue from "../assets/technology/image-launch-vehicle-landscape.jpg"
import Capsula from "../assets/technology/image-space-capsule-landscape.jpg"
import Spaceport from "../assets/technology/image-spaceport-landscape.jpg"
const data = [
  {
    nombre: "Moon",
    especificacion:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distancia: "384,400 KM",
    viaje: "3 days",
    img: Luna,
    id: 1,
  },
  {
    nombre: "Mars",
    especificacion:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distancia: "225 MIL. km",
    viaje: "9 months",
    img: Marte,
    id: 2,
  },
  {
    nombre: "Europa",
    especificacion:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distancia: "628 MIL. km",
    viaje: "3 years",
    img: Europa,
    id: 3,
  },
  {
    nombre: "Titan",
    especificacion:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distancia: "1.6 BIL. km",
    viaje: "7 years",
    img: Titan,
    id: 4,
  },
];
const crew = [
  {
    nombre: "Douglas Hurley",
    cargo: "Commander",
    descripcion:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: Douglas,
    id: 1,
  },
  {
    nombre: "MARK SHUTTLEWORTH",
    cargo: "Mission Specialist",
    descripcion:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: Mark,
    id: 2,
  },
  {
    nombre: "Victor Glover",
    cargo: "Pilot",
    descripcion:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: Victor,
    id: 3,
  },
  {
    nombre: "Anousheh Ansari",
    cargo: "Flight Engineer",
    descripcion:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: Anousheh,
    id: 4,
  },
];
const spacelaunch = [
  {
    titulo: "launch vehicle",
    img:Despegue,
    descripcion:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    id: 1,
  },
  {
    titulo: "spaceport",
    img:Capsula,
    descripcion:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    id: 2,
  },
  {
    titulo: "space capsule",
    img:Spaceport,
    descripcion:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    id: 3,
  },
];
export { data, crew,spacelaunch };
