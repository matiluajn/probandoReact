import React  from 'react';
import './ItemListContainer.css'
import ItemProducts from '../itemProducts/ItemProducts';


const ItemCount =(props)=>{  

    

    return(

            <div className="card-group">    
                <div class="card " style={{width: "18rem"}}>
                    <img src={props.img} class="card-img-top" alt="..."/>
                    <div class="card-body  ">
                        <h5 class="card-title text-dark">Press to sum or subtract</h5>
                        <p class="card-text text-dark">{props.count}</p>
                        <button onClick={props.restar} type="button" class="btn btn-primary">-1</button>
                        <button onClick={props.initial} type="button" class="btn btn-primary">0</button>
                        <button onClick={props.onAdd} type="button" class="btn btn-primary">+1</button>
                    </div>
                </div>
            </div>   
        
    )
}

export default ItemCount;