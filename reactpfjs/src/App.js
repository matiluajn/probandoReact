import logo from './logo.svg';
import './App.css';
import ItemCount from './components/itemCount/ItemCount'
import ItemProducts from './components/itemProducts/ItemProducts';
import React,{useState} from 'react';
function App() {
  const [count, setCount] = useState(0)

  const stock = 10;

  const initial=()=>{
    setCount(()=>{
        return 0
    })
  };

  const onAdd=()=>{
    if(count>=stock){
        alert('acabas de llegar al total de stock disponible')
        setCount(stock)
    }else{
        setCount(count + 1)
    };
  }

    const restar=()=>{
      if(count<=0){
          alert('porfavor selecciona al menos 1 item')
          setCount(initial)
      }else{
          setCount(count - 1)
      };
  }
  return (
    <div className="App">
      <header className="App-header">
        
      <ItemCount img={logo} onAdd={onAdd} stock={stock} initial={initial} restar={restar} count={count}/>
      <ItemProducts/>
      
       
      </header>
    </div>
  );
}

export default App;
