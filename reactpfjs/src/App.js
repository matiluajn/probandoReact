
import './App.css';
import ItemCount from './components/itemCount/ItemCount'
import ItemDetail from './components/itemDetailConteiner/ItemDetail';
import React,{useState} from 'react';
import Api from './components/api/Api'
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
    const [mostrarCard,setMostrarCard] = useState()
    const mostrar1=()=>{
      return setMostrarCard(<ItemDetail />)
    }

  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
         <div className="row">
           <div className="col-md-4">
           <ItemCount  mostrar={mostrar1}  onAdd={onAdd} stock={stock} initial={initial} restar={restar} count={count}/>
           
           </div>
           <div className=" itemProd col-md-4">
           
           {
             mostrarCard
           }
           </div>
           <div >
            <Api/>
           
           </div>

          
          
         </div>
       
      </div> 
     
      
       
      </header>
    </div>
  );
}

export default App;
