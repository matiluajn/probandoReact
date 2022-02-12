import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer'
import  logo2 from './components/carrito-de-supermercado.png'
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        
      <ItemListContainer img={logo}/>
      
       
      </header>
    </div>
  );
}

export default App;
