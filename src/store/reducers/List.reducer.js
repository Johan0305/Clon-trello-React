import axios from "axios";
const LISTS_SUCCESS = "LISTS_SUCCESS";
const LISTS_ERROR = "LISTS_ERROR";
const LISTS_LOADING = "LISTS_LOADING";
const DELETE_LIST = "DELETE_LIST";
const UPDATE_LIST = "UPDATE_LIST";

const initialState = {
  lists: [],
  loading: false,
  error: null,
};

export const getLists = (boardId) => {
  return async function (dispatch) {
    try {
      const lists = await axios.get(`http://localhost:8080/lists/${boardId}`);
      dispatch({ type: LISTS_SUCCESS, payload: lists.data.data });
    } catch (err) {
      dispatch({ type: LISTS_ERROR, payload: err });
    }
  };
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LISTS_SUCCESS:
      return {
        ...state,
        theBoards: action.payload,
      };
    case DELETE_LIST:
      return {
        ...state,
        theBoards: state.theBoards.filter(
          (item) => item._id !== action.payload
        ),
      };
    case LISTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};
