import {Link} from 'react-router-dom'

export const Item = ({id, title, price, pictureUrl}) => {

    return(
    <div className="productCard">
        <img src={pictureUrl} alt="" className="productImg" />
        <h3>{title}</h3>
        <h4>Precio ${price}</h4>
        <Link to={`/detail/${id}`}> <button className="productBtn">Ver Producto</button></Link>
    </div>
)   
}