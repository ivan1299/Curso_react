import { useEffect, useState, useContext } from "react";
import { ItemList } from './ItemList'
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/config";
import { collection, getDocs, query, where} from "firebase/firestore";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(false)

    const {marcaId} = useParams()

    const pedirDatos = () => { 
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve ()
            
        }, 2000)
    })
    }
    
    useEffect(()=>{
        setLoading(true)

        const productosRef = collection(dataBase, 'stock')
        
        const q = marcaId ? query (productosRef, where("marca","==",marcaId)) : productosRef

        getDocs(q)
            .then((resp)=> {
                setProductos(resp.docs.map((doc)=> {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                }))
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