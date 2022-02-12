import React, {useState} from 'react';
import './ItemListContainer.css'

const ItemListContainer =({img})=>{
const [count, setCount] = useState(0)
const sumar=()=>{
    setCount(count + 1)
    };
const restar=()=>{
    setCount(count - 1)
    };
const cero=()=>{
    setCount(()=>{
        return 0
    })
    };    
    return(

            <div className="card-group">    
                <div class="card " style={{width: "18rem"}}>
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body  ">
                        <h5 class="card-title text-dark">Press to sum or subtract</h5>
                        <p class="card-text text-dark">{count}</p>
                        <button onClick={restar} type="button" class="btn btn-primary">-1</button>
                        <button onClick={cero} type="button" class="btn btn-primary">0</button>
                        <button onClick={sumar} type="button" class="btn btn-primary">+1</button>
                    </div>
                </div>
            </div>   
        
    )
}

export default ItemListContainer;