// eslint-disable-next-line jsx-a11y/img-redundant-alt
import React from "react";
import styles from "./navBar.module.css";
import img from "../../Images/06.png";

const NavBar = () => {
  return (
    <div className={styles.containerNav}>
      <div className={styles.containerTitle}>
        <img className={styles.image} src={img} alt="Imagen" />
        <h1 className={styles.title}>Dogs Web</h1>
      </div>
      <div className={styles.containerSearch}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Find dog breeds"
        />
        <button className={styles.exitPage}></button>
      </div>
    </div>
  );
};

export default NavBar;
