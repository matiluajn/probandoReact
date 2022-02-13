import React,{useState,useEffect} from 'react'
  

export default function ItemProducts() { 
         

    const products = [
        {
            id:1,
          cliente: 'daniel',
          prenda: 'buzo',
          talle: 'm',
          costo: 135,
        },
        {
            id:2,
          cliente: 'vanesa',
          prenda: 'vestido',
          talle: '2',
          costo: 600,
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
                       {element.prenda}
                   </div>
                )
            })
          }
    
    </div>
  )
}
