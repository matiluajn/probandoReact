import React from 'react';
import './ItemListContainer.css'

const ItemListContainer =({img})=>{
    return(
        <div className="container">        
        <div class="card " style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body d-flex flex-column ">
                <h5 class="card-title text-dark">Card title</h5>
                <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    )
}

export default ItemListContainer;