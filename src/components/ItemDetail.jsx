import { ItemCounter } from "./ItemCounter"
import { CartContext } from './CartContext'
import { useContext } from "react"
import {Link} from 'react-router-dom'

export const ItemDetail= ({id, title, description, price, pictureUrl}) => {

    const { cart, agregarAlCarrito, isInCart} = useContext(CartContext)
    console.log(cart)


    const add = (cantidad) => {
        if (cantidad === 0) return

        if(!isInCart(id)){
            const addItem = { id, title, price, cantidad}
        
    agregarAlCarrito(addItem)
    }
}

    return(
        <div className="productsDetail">
            <img src={pictureUrl} alt="" className="productImgDetail" />

            <div className="details">
                <h3>{title}</h3>
                <h4>Precio ${price}</h4>
                <p>{description}</p>


            {
                isInCart(id)
                ? <Link to="/cart" className="shopBtn">
                        Finalizar compra
                </Link>
                :
                <>
                <div className="productBuy">
                <ItemCounter add={add}/>
                </div>
                </>
            }   
            
            </div>
        </div>
    )
}