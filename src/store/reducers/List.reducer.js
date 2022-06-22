import axios from "axios";
const LISTS_SUCCESS = "LISTS_SUCCESS";
const LISTS_ERROR = "LISTS_ERROR";
const LISTS_LOADING = "LISTS_LOADING";
const DELETE_LIST = "DELETE_LIST";
const UPDATE_LIST = "UPDATE_LIST";

export const getLists = (boardId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LISTS_LOADING, payload: true });
      const lists = await axios.get(`http://localhost:8080/lists/${boardId}`);
      dispatch({ type: LISTS_SUCCESS, payload: lists.data.data });
      dispatch({ type: LISTS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: LISTS_ERROR, payload: err });
    }
  };
};

export const postList = (boardId, newList) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LISTS_LOADING, payload: true });
      const list = await axios.post(`http://localhost:8080/lists/${boardId}`, {
        name: newList,
      });
      try {
        dispatch({ type: LISTS_LOADING, payload: true });
        const lists = await axios.get(`http://localhost:8080/lists/${boardId}`);
        dispatch({ type: LISTS_SUCCESS, payload: lists.data.data });
        dispatch({ type: LISTS_LOADING, payload: false });
      } catch (err) {
        dispatch({ type: LISTS_ERROR, payload: err });
      }
    } catch (err) {
      dispatch({ type: LISTS_ERROR, payload: err });
    }
  };
};

export const deleteList = (listId, boardId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LISTS_LOADING, payload: true });
      const list = await axios.delete(`http://localhost:8080/lists/${listId}`);
      dispatch({ type: DELETE_LIST, payload: listId });
      try {
        dispatch({ type: LISTS_LOADING, payload: true });
        const lists = await axios.get(`http://localhost:8080/lists/${boardId}`);
        dispatch({ type: LISTS_SUCCESS, payload: lists.data.data });
        dispatch({ type: LISTS_LOADING, payload: false });
      } catch (err) {
        dispatch({ type: LISTS_ERROR, payload: err });
      }
      dispatch({ type: LISTS_LOADING, payload: false });
    } catch (err) {
      alert("No se pudo borrar el tablero");
    }
  };
};

const initialState = {
  lists: [],
  loading: false,
  error: null,
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
        lists: action.payload,
      };
    case DELETE_LIST:
      return {
        ...state,
        theBoards: state.lists.filter((item) => item._id !== action.payload),
      };
    case LISTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
