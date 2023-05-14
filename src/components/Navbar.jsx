import React from "react";
import "/src/estilos/Navbar.css";
export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar"></div>
      <nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Bienestar</a>
          </li>
          <li>
            <a href="#">Biblioteca</a>
          </li>
          <li>
            <a href="#">Directivas</a>
          </li>
          <li>
            <a href="#">Monetaria</a>
          </li>
          <li>
            <a href="#">Áreas</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
