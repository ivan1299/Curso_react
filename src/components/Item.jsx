
export const Item = ({title, description, price, pictureUrl}) => {
return(
    <div className="productCard">
        <img src={pictureUrl} className="productImg" />
        <h3>{title}</h3>
        <h4>Precio ${price}</h4>
        <p>{description}</p>
    </div>
)

}