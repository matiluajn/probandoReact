import React,{useState,useEffect} from 'react'
import imgBelgrano from '../buzo_belgrano.jpg'
  

export default function ItemDetail() { 
         

    const products = [
        {
          id:1,
          cliente: 'daniel',
          prenda: 'buzo de Belgrano',
          talle: 'm',
          costo: 1750,
          img: imgBelgrano
        },
      
      ];
      const [client, setClient] = useState([]);
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
          reject('error malviviente');
        }, 2000);
      });
      useEffect(()=>{
        promise.then(
            (result) => {
              setClient(result)
              console.log(result)
              
            },
            (err) => {
              return console.log('error', err)
            }
          );
      },[])
  return (
      <div>
          { client.length === 0 ?
          <>
          <p>cargando</p>
          </>
          :
              client.map((element)=>{
                return(
                   <div key={element.id}>
                     <div class="card" style={{width: '18rem'}}>
                        <img src={element.img}class="card-img-top" alt="..."/>
                       <div class="card-body">
                        <p class="card-text bg-dark">{element.prenda}</p>
                        <p class="card-text bg-dark">talle: {element.talle}</p>
                        <p class="card-text bg-dark"> precio: ${element.costo}</p>
                       </div>
                     </div>
                   </div>
                )
            })
          }
    
    </div>
  )
}
