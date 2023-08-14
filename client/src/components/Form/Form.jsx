import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament } from "../../redux/actions";
import styles from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allTemperament = useSelector((state) => state.filteredTemperament);

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    if (selectedOptions.length + selected.length <= 7) {
        setSelectedOptions(selectedOptions => [...new Set([...selectedOptions, ...selected])]);
      }
  };

  const handleRemoveOption = (valueToRemove) => {
    const updatedValues = selectedOptions.filter(value => value !== valueToRemove);
    setSelectedOptions(updatedValues);
  };


  return (
    <div className={styles.containerForm}>
      <form>
        <div className={styles.containerTitle}>
          <h1>Form</h1>
          <button onClick={() => history.push('/HomePage')}>X</button>
        </div>
        <div className={styles.containerLeft}>
          <label htmlFor="name">name</label>
          <input name="name" type="text" />
        </div>
        <div className={styles.containerRight}>
          <label htmlFor="height">height</label>
          <input name="height" type="text" />
        </div>
        <div className={styles.containerLeft}>
          <label htmlFor="width">width</label>
          <input name="width" type="text" />
        </div>
        <div className={styles.containerRight}>
          <label htmlFor="yearsOfLife">yearsOfLife</label>
          <input name="yearsOfLife" type="text" />
        </div>
        <div className={styles.containerLeft}>
          <label htmlFor="image">Image</label>
          <input type="text" />
        </div>
        <div className={styles.containerRight}>
          <label>Temperment</label>
          <select multiple onChange={handleSelectChange}>
            {allTemperament.map((temp) => {
              return <option value={temp.name}>{temp.name}</option>;
            })}
          </select>
        </div>
        <div className={styles.containerOptionValue}>
        {selectedOptions.map((value, index) => (
          <h3 key={index}>
            {value} 
            <span 
              style={{ cursor: 'pointer', marginLeft: '5px', color: 'red' }} 
              onClick={() => handleRemoveOption(value)}
            >
              x
            </span>
          </h3>
        ))}
      </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Form;
