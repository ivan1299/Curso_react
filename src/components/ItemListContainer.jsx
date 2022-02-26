import { useEffect, useState, useContext } from "react";
import { ItemList } from './ItemList'
import { stock } from '../datos/stock'
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(false)

    const {marcaId} = useParams()

    const pedirDatos = () => { 
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve (stock)
            
        }, 2000)
    })
    }
    
    useEffect(()=>{
        setLoading(true)
        
        pedirDatos(false)
        .then((res)=>{
           if(marcaId){
            setProductos(res.filter((el)=> el.marca === marcaId))
           } else{
               setProductos(res)
           }
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[marcaId])

    return (
        <div className="body">
        {
        
            loading ? <h1 className="catalog">Cargando Productos...</h1>
            :<ItemList productos={productos}/>        
        
        }
        </div>
      );

};