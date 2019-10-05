// we'll need axios
import axios from "axios";
export const FETCHING = 'FETCH'
export const SUCCESS = 'SUCCESS'
export const FAILURE ='FAILURE'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const success = value => {
  return {
    type: SUCCESS,
    payload: value
  };
};

export const failure = value => {
  return {
    type: FAILURE,
    payload: value
  };
};
export const fetching = () => async dispatch => {
  dispatch({type: FETCHING });
  try {
    const AxiosData = await axios.get("https://swapi.co/api/people/");
    setTimeout (() =>dispatch(success(AxiosData.data.results)), 6000);
  } catch (err) {
    setTimeout (() =>dispatch(failure(err.message)), 6000);
  }
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
