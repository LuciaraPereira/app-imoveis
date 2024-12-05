import { ImArrowLeft2 } from 'react-icons/im';
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsBookshelf } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu(){
    return(
     
        <footer> 
          
            <ul>
           
                <li>  <Link className="links" to="/App"><FaRegBuilding /></Link> </li>
                <li>  <Link className="links" to="#"><FaRegCalendarAlt /></Link> </li>
                <li>  <Link className="links" to="#"><BsBookshelf /></Link> </li>
                <li>  <Link className="links" to="#"><BsPerson /> </Link> </li>
               
            </ul>
          
        </footer>

    );
}

export default Menu;