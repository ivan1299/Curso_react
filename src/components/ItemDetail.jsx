
export const ItemDetail= ({title, description, price, pictureUrl}) => {

    return(
        <div className="productsDetail">
            <img src={pictureUrl} alt="" className="productImgDetail" />

            <div className="details">
                <h3>{title}</h3>
                <h4>Precio ${price}</h4>
                <p>{description}</p>
                <button className="productBtn" >Comprar</button>
            </div>
        </div>
    )
}