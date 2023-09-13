import React from 'react'
import "./style/nav.scss"
import { useState } from "react";

const Nav = () => {
   const [showSidebar, setShowSidebar]  = useState(false);

  const toggleSiderbar = () => setShowSidebar(!showSidebar);
  return (
    <div>
     <header className="header  ">
     <nav className="navbar navbar-expand-md bg-body-secondary  fixed-top">
  <div className="container bbb">
    <span className="navbar-brand h5 text-info" href="#">FiBizz</span>
    <button onClick={toggleSiderbar} className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className={`offcanvas offcanvas-end ddd ${showSidebar ? "show":""} `} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FiBzzz</h5>
        <button onClick={toggleSiderbar} type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div> 
      <div className="offcanvas-body justify-content-end " >
        <ul className="navbar-nav  flex-grow-2 pe-3">
          <li className="nav-item mx-2 active">
          <span className="nav-link">Home</span>
          </li>
          <li className="nav-item mx-2 active">
          <span className="nav-link">About</span>
          </li>
          <li className="nav-item mx-2 t active">
          <span className="nav-link">Contact</span>
          </li>
        
        </ul>
       
      </div>
    </div>
  </div>
</nav>


     </header>


   
  
    </div>
  )
}

     export default Nav