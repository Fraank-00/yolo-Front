
import { Card } from 'react-bootstrap';

import Mynavbar from './../component/Navbar.jsx';

const DefaultTemplate =(props) => {
 const children = props.children;
  return (
    <>
    <Mynavbar/>
    <div style={{padding : 20}}>
  <Card >
     {children}
    </Card>
    </div>
    </>
    
  );
 }
export default DefaultTemplate;
