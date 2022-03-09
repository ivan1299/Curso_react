import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "./CartContext"
import { addDoc, collection} from "firebase/firestore"
import { dataBase } from "../firebase/config";
import { Link } from "react-router-dom";


export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)  

    const [orderId, setOrderId] = useState(null)
    
    const generarOrden = () => {
        const orden = {
            comprador: values,
            item: cart,
            total: totalCart(),
        }

        const ordersRef = collection(dataBase, "ordenes")
        addDoc(ordersRef, orden)
            .then((doc) =>{
                console.log(doc.id)
                setOrderId(doc.id)
                vaciarCart()
            })  
    }

    const [values, setValues] = useState({
        nombre:'',
        email:'',
        tel:'',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSumbit = (e) => {
        e.preventDefault()
     
        if(values.nombre.length < 4){
            alert("El nombre debe ser mayor a 3 caracteres")
            return
        }
        
    generarOrden()
    }

    if(orderId){
        return(
            <div className="body">
            <h1>Gracias por tu compra</h1>
            <h3>Tu id de compra es: {orderId} </h3>
            <Link to="/" className=""> vlver al inicio </Link>
            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }
    return(
        <div className="body">
            <h1>Checkout</h1>

            <hr />

            <form onSubmit={handleSumbit}>
                <input
                    className="formInput"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                 <input
                    className="formInput"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="formInput"
                    type='tel'
                    placeholder="Tu teléfono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />
                <button type="submit" className="productBtnBuy">
                    enviar
                </button>
            </form>
        </div>
    )
    }