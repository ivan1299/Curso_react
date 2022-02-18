import './style.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:marcaId" element={<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
