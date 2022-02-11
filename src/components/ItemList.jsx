import { Item } from './Item'

export const ItemList = ({productos}) => {
    return (
        <div className="catalog">
        {productos.map((el) => <Item key={el.id} title={el.title} description={el.description} price={el.price} pictureUrl={el.pictureUrl}/>)}
        </div>
    )
}