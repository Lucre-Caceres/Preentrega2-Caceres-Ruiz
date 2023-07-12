import React from "react";
import CartWidget from "../CartWidget"
import styles from "./navbar.module.css"




const Navbar = () => {
  return (
    <nav className={styles.contenedor} >
      <ul>
        <p className={styles.brand}>La Tiendita</p> 
        <li className={styles.list}><a href="#">Inicio</a></li>
        <li className={styles.list}><a href="#">Productos</a></li>
        <li className={styles.list}><a href="#">Contacto</a></li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default Navbar;