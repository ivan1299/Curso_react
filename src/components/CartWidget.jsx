import { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrito_vacio from '../images/carrito_vacio.png';
import { CartContext } from './CartContext';

export const CartWidget = () => {

    const {cantidadCart} = useContext(CartContext)
    return (
        <Link to="/cart" className="cartNav">
            <img src={carrito_vacio} alt="" className="cartImg"/>
            <span >{cantidadCart()}</span>
        </Link> 
      );

};