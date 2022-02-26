import { useState } from "react"

export const ItemCounter= ({max=10,min=0, add}) => {

    const [counter, setCounter] = useState(min)

    const handleSumar = (e) => {
        e.stopPropagation()
        counter < max && setCounter(counter +1)
    } 

    const handleRestar = () => {
        counter > min && setCounter(counter -1)
    } 

    const handleAgregar = () => {
        add(counter)
    }

    return(
        <>
        <div className="contador">
        <button className="productBtn" onClick={handleRestar}>-</button>
        <span>{counter}</span>
        <button className="productBtn" onClick={handleSumar}>+</button>
        </div>
        <button className="productBtn" onClick={handleAgregar}>Agregar a carrito</button>
        </>
        )
}