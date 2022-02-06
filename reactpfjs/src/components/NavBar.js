import React from "react";
import './NavBar.css';
import logo from "./carrito-de-supermercado.png"

function navBar(){
    return(
        <header className="header ">
         <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid">
                <a class="navbar-brand" target="_blank" href="https://www.linkedin.com/in/matt-lujan">Matt-lujan</a>
                   
                    
                 <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ">
                        <a class="nav-link " href="#">Features</a>
                        </li>
                        <li class="nav-item ">
                        <a class="nav-link " href="#">Pricing</a>
                        </li>
                        <li class="nav-item ">
                        <a class="nav-link " href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <a href="">
                    <img className="cart-logo" src={logo}>
                    </img>
                </a>
            </div>
        </nav>
        </header>
    )
}
export default navBar;