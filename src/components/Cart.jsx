import { useContext } from "react"
import { CartContext } from "./CartContext"

export const Cart = () => {
    const {cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext)
    return(

        <div className="body">
            <h1>Carrito de Compras</h1>
        <hr />
            { cart.map((item)=> (
                <div key={item.id} className="cartProduct" >
                    <div className="detailCart">
                    <h3>{item.title} </h3>
                    <p>Cantidad {item.cantidad}</p>
                    <p>Precio: ${item.cantidad * item.price}</p>
                    </div>
                    <button className="productBtn" onClick={() => eliminarItem(item.id)}>X</button>
                </div>
            ))
            }
            <h1>Total: ${totalCart()}</h1>
            <div>
            <button className="productBtnClean" onClick={vaciarCart}>Vaciar carrito</button>
            <button className="productBtnBuy" onClick={vaciarCart}>Pagar</button>
            </div>
        </div>
    )
}