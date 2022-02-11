import { CartWidget } from './CartWidget'

export const NavBar = () => {

    return (
        <div className="navBar">
            <h1>Sport Place</h1>

            <ul>
                <li>Adidas</li>
                <li>Nike</li>
                <li>Puma</li>
            </ul>

            <CartWidget/>
        </div>
      );

};