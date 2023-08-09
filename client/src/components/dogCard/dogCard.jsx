/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from './dogCard.module.css';

const DogCard = ({
    name,
    image,
    temperament,
    weight
  }) => {
    return(
        <div className={styles.containerCard}>
            <h2>Name: {name}</h2>
            <img src={image} className={styles.image} alt="Dog Image"></img>
            <h2>Temperament: {temperament}</h2>
            <h2>Weight: {weight.imperial} / {weight.metric}</h2>
        </div>
    );
}

export default DogCard;