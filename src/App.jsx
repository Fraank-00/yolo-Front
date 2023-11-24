import { RouterProvider,} from "react-router-dom";

import DefaultTemplate from "./template/DefaultTemplate.jsx";

import {router} from './router.jsx'

const App =() => {

  return (
    < DefaultTemplate>
    <RouterProvider router={router} />
    </ DefaultTemplate>
    
  );
 }
export default App;
