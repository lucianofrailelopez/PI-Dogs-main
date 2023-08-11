import axios from "axios";
import { GETDOGS, GETDOGBYID, GETDOGSBYNAME, ORDER } from "./types";

export const getDogs = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/dogs");
    const data = response.data;
    return dispatch({
      type: GETDOGS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDogById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/dogs/${id}`);
    const data = response.data;
    return dispatch({
      type: GETDOGBYID,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDogsByName = (dataName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/dogsname?name=${dataName}`
    );
    const data = response.data;
    if (dataName === "") {
      return dispatch({
        type: GETDOGSBYNAME,
        payload: [],
      });
    } else {
      return dispatch({
        type: GETDOGSBYNAME,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const orderDogs = (order) => {
  return { type: ORDER, payload: order };
};
