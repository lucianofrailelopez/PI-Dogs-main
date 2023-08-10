import axios from "axios";
import { GETDOGS } from "./types";

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
