
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingContext from './context/ShoppingContext';




function App() {
  

  return (
    <ShoppingContext>
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/category/:category" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>

    </BrowserRouter>
    </ShoppingContext>
   
  )
}

export default App;
  