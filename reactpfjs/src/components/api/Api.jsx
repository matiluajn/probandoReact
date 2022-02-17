import React, { useState, useEffect } from 'react';
import './Api.css'


export default function Api() {
  const [users, setUsers] = useState([]);
  const obtenerUsers = async () => {
    const oDatos = await fetch('https://rickandmortyapi.com/api/character');
    const usu = await oDatos.json();
    console.log(usu);
    setUsers(usu);
  };
  useEffect(() => {
    obtenerUsers();
  }, []);
  return (
    <div className='conteiner d-flex align-content-around flex-wrap'>
     {
         users?.results?.map((element)=>{
            return(
                <div className='row'>
                    <div className='col'>
                        <div className='p-2'>
                        
                            <div key={element.id} className="card  " style={{width: "18rem;"}}>
                                <img src={element.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title bg-dark">{element.name}</h5>
                                <p class="card-text bg-dark">{element.species}</p>
                                <p class="card-text bg-dark">{element.origin.name}</p>                               
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            )
        })
     }
    </div>
  );
}
