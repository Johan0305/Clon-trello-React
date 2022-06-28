import axios from "axios";
import toast from "react-hot-toast";
const LISTS_SUCCESS = "LISTS_SUCCESS";
const LISTS_ERROR = "LISTS_ERROR";
export const LISTS_LOADING = "LISTS_LOADING";
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
      toast.success("Lista creada exitosamente.");
    } catch (err) {
      dispatch({ type: LISTS_ERROR, payload: err });
      toast.error("No pudimos crear la lista, inténtalo más tarde.");
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
      toast.success("Lista eliminada.");
      dispatch({ type: LISTS_LOADING, payload: false });
    } catch (err) {
      alert("No se pudo borrar el tablero");
      toast.error("No pudimos eliminar la lista, inténtalo más tarde.");
    }
  };
};

export const updateList = (listId, data) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LISTS_LOADING, payload: true });
      const board = await axios.put(
        `http://localhost:8080/lists/${listId}`,
        data
      );
      dispatch({ type: UPDATE_LIST, payload: data });
      dispatch({ type: LISTS_LOADING, payload: false });
    } catch (err) {
      toast.error("No pudimos actualizar la lista, inténtalo más tarde.");
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
        lists: state.lists.filter((item) => item._id !== action.payload),
      };
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
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
