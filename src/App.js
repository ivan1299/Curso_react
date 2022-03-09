import './style.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartProvider } from './components/CartContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'


function App() {

  return ( 
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:marcaId" element={<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    );
}

export default App;
