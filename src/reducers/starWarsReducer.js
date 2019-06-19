import /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...initialState, fetching: true };
    case "SUCCESS":
      return { ...initialState, characters: action.payload, fetching: false };
    case "FAILURE":
      return { ...initialState, error: action.payload, fetching: false };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
