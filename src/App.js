import './style.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <div className="body">
    <NavBar/>
    <ItemListContainer/>
    </div>
    );
}

export default App;
