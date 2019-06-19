// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const Success = value => {
  return {
    type: "SUCCESS",
    payload: value
  };
};

export const Failure = value => {
  return {
    type: "FAILURE",
    payload: value
  };
};
export const Fetching = () => async dispatch => {
  const AxiosData = axios.get("https://swapi.co/api/people");
  try {
    dispatch({ type: "FETCH", payload: Success(AxiosData.data) });
  } catch (err) {
    dispatch({ type: "FETCH", payload: Failure(AxiosData.statusText) });
  }
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
