import UrbanRoutes from "../assets/img-projects/UrbanRoutes.png";
import imgNote from "../assets/img-projects/note-app.png";
import UrbanGrocers from "../assets/img-projects/UrbanGrocers.png";

export const proyectos = [
   {
    titulo: "Urban Grocers",
    imagen: UrbanGrocers.src,
    tecnologias: ["Jira", "Postman"],
  },
  {
    titulo: "Urban Routes",
    descripcion: "Urban Routes, diseñe y ejecute pruebas funcionales, de interfaz y compatibilidad",
    imagen: UrbanRoutes.src,
    tecnologias: ["Jira", "Figma"],
  },

  {
    titulo: "App organizacion",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
  },
  {
    titulo: "API REST",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
  },
];
