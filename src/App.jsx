
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  

  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/category/:category" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>

    </BrowserRouter>
   
  )
}

export default App;
  