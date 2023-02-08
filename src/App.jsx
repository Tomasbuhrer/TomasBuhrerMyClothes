
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  

  return (
    <>
    <NavBar className="navbar"/>

    <ItemListContainer greeting="Gracias Por Comprar!"/>
    </>
   
  )
}

export default App
