import { useEffect, useState } from "react";
import { ItemDetail } from './ItemDetail';
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState (null)

    const {itemId} = useParams()
    
    const pedirDatos = () => { 
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                resolve ()
            }, 500)
        })
        }

    useEffect(()=>{
        setLoading(true)
         
        const docRef = doc  (dataBase, "stock", itemId)

        getDoc(docRef)
            .then((doc)=>{
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> {
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