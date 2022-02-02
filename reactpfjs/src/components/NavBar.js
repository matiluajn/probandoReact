import React from "react";
import './NavBar.css';

function navBar(){
    return(
        <header className="header">
            <nav className="nav d-flex justify-content-center ">   
                <nav class="nav   ">
                    <a class="nav-link active text-danger" aria-current="page" href="#">Home</a>
                    <a class="nav-link text-danger" href="#">Abcdbout us</a>
                    <a class="nav-link text-danger" href="#">Products</a>
                    <a class="nav-link text-danger ">Cart</a>
                </nav>
            </nav>

        </header>
    )
}
export default navBar;