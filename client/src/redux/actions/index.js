import axios from "axios";
import { GETDOGS, GETDOGBYID } from "./types";

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
