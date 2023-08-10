/* eslint-disable no-sequences */
import React from "react";
import { useState, useEffect } from "react";
import styles from "./dogsCards.module.css";
import DogCard from "../dogCard/dogCard";
import { useDispatch, useSelector } from "react-redux";
import {getDogs} from '../../redux/actions/index';

const itemsPerPage = 8;

const DogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.charactersDogs)

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const current = allCharacters.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allCharacters.length / itemsPerPage);

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
      <div className={styles.containerSelect}>
        <select>
          <option>Filter</option>
          <option value="Temperament">Temperament</option>
          <option value="API">External API Dog</option>
          <option value="Genderless">DataBase Dogs</option>
        </select>
        <select>
          <option>Order</option>
          <option value="A">Upward</option>
          <option value="D">Falling</option>
        </select>
      </div>
      <div className={styles.cards}>
        {current?.map((data) => {
          return (
            <DogCard
              id={data.id}
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
            {currentPage} of {totalPages}
        </span>
        <button className={styles.buttonNext} onClick={nextPage} disabled={currentPage === totalPages}></button>
      </div>
    </div>
  );
};

export default DogCards;
