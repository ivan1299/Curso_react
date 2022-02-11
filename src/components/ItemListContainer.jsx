import { useEffect, useState } from "react";
import { Item } from './Item'
import { ItemList } from './ItemList'
import {stock } from '../datos/stock'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(false)

    const pedirDatos = (res) => { 
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
            setProductos(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    return (
        <>
        {
        
            loading ? <h1>Loading...</h1>
            :<ItemList productos={productos}/>        
        
        }
        </>
      );

};