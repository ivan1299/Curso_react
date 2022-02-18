import {Link} from 'react-router-dom'
import { CartWidget } from './CartWidget'
import home from '../images/home.png';

export const NavBar = () => {

    return (
        <div className="navBar">

            <h1 className="logo">Sport Place</h1>
            
            <Link to='/'>
            <img src={home} alt="" className="homeImg"/>
            </Link>

            <div className="brands">
                <Link to='/productos/adidas' className="brand">Adidas</Link>
                <Link to='/productos/nike' className="brand">Nike</Link>
                <Link to='/productos/puma' className="brand">Puma</Link>
            </div>

            <CartWidget/>
        </div>
      );

};