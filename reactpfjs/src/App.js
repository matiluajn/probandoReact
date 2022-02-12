import logo from './logo.svg';
import './App.css';
import ItemCount from './components/ItemCount'
import  logo2 from './components/carrito-de-supermercado.png'
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        
      <ItemCount img={logo}/>
      
       
      </header>
    </div>
  );
}

export default App;
