import { useEffect, useState } from "react";
import { ItemDetail } from './ItemDetail';
import { stock } from '../datos/stock'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState (null)

    const {itemId} = useParams()
    
    const pedirDatos = () => { 
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                resolve (stock)
            }, 500)
        })
        }

    useEffect(()=>{
        setLoading(true)
        
        pedirDatos()
        .then((res)=>{
            setItem(res.find((el)=> el.id === Number(itemId)))
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    return (
        <div className="body">
        {
            loading ? <h1 className="catalog">Cargando Productos...</h1>
            :<ItemDetail {...item}/>        
        }
        </div>
      )

};