import {createBrowserRouter,} from "react-router-dom";

//vistas
import Inicio from './views/inicio.jsx';
import Cargar from './views/cargar.jsx';
import Eliminar from "./views/eliminar.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio/>,
    },{
        path: "/cargar",
      element: <Cargar/>,
    },{
      path: "/eliminar/:id",
    element: <Eliminar/>,
  }
    
  ]);
export {router }