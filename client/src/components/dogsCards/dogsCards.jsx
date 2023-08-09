/* eslint-disable no-sequences */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./dogsCards.module.css";
import DogCard from "../dogCard/dogCard";

const itemsPerPage = 8;

const DogCards = () => {
  const [itemList, setItemList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dogs")
      .then((response) => {
        setItemList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(itemList.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.containerCards}>
      <div className={styles.cards}>
        {currentItems?.map((data) => {
          return (
            <DogCard
              name={data.name}
              image={data.image.url}
              temperament={data.temperament}
              weight={data.weight}
            />
          );
        })}
      </div>
      <div className={styles.containerPaginated}>
        <button className={styles.buttonPrev} onClick={prevPage} disabled={currentPage === 1}></button>
        <span>
            {currentPage} de {totalPages}
        </span>
        <button className={styles.buttonNext} onClick={nextPage} disabled={currentPage === totalPages}></button>
      </div>
    </div>
  );
};

export default DogCards;
