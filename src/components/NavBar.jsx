import {Link} from 'react-router-dom'
import { CartWidget } from './CartWidget'
import home from '../images/home.png';

export const NavBar = () => {

    return (
        <div className="navBar">

            <h1 className="logo">Sport Place</h1>
            
            <div className="dropdown">
                <button className="brand">Camisetas 
                </button>
                <div className="brands">
                    <div class="dropdown-content">
                    <Link to='/productos/argentina' className="brand">Argentina</Link>
                    <Link to='/productos/boca' className="brand">Boca Juniors</Link>
                    <Link to='/productos/barcelona' className="brand">Barcelona</Link>
                    <Link to='/productos/liverpool' className="brand">Liverpool</Link>
                    </div>
                </div>
            </div>

            <div className="dropdown">
                <button className="brand">Botines 
                </button>
                <div className="brands">
                    <div class="dropdown-content">
                    <Link to='/productos/adidas' className="brand">Adidas</Link>
                    <Link to='/productos/nike' className="brand">Nike</Link>
                    <Link to='/productos/puma' className="brand">Puma</Link>
                    </div>
                </div>
            </div>

            <CartWidget/>
            
            <Link to='/'>
            <img src={home} alt="" className="homeImg"/>
            </Link>
        </div>
      );

};