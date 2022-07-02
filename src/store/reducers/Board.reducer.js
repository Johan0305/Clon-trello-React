import axios from "axios";
import toast from "react-hot-toast";
const THE_BOARDS_SUCCESS = "THE_BOARDS_SUCCESS";
const BOARDS_ERROR = "BOARDS_ERROR";
const BOARDS_LOADING = "BOARDS_LOADING";
const DELETE_BOARD = "DELETE_BOARD";
const UPDATE_BOARD = "UPDATE_BOARD";

const initialState = {
  theBoards: [],
  loading: false,
  error: null,
};
//action creator

export const getTheBoards = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: BOARDS_LOADING, payload: true });
      const boards = await axios.get(
        `${process.env.REACT_APP_URL_BACK}/boards`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({ type: THE_BOARDS_SUCCESS, payload: boards.data.data });
      dispatch({ type: BOARDS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: BOARDS_ERROR, payload: err });
    }
  };
};

export const posttheBoards = (newBoard, color) => {
  return async function (dispatch) {
    try {
      dispatch({ type: BOARDS_LOADING, payload: true });
      const board = await axios.post(
        `${process.env.REACT_APP_URL_BACK}/boards`,
        {
          name: newBoard,
          marked: false,
          closed: false,
          color: color,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      try {
        dispatch({ type: BOARDS_LOADING, payload: true });
        const boards = await axios.get(
          `${process.env.REACT_APP_URL_BACK}/boards`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch({ type: THE_BOARDS_SUCCESS, payload: boards.data.data });
        dispatch({ type: BOARDS_LOADING, payload: false });
      } catch (err) {
        dispatch({ type: BOARDS_ERROR, payload: err });
      }
      toast.success("Tablero creado exitosamente.");
    } catch (err) {
      dispatch({ type: BOARDS_ERROR, payload: err });
      toast.error("No pudimos crear el tablero, inténtalo más tarde.");
    }
  };
};

export const deleteBoard = (boardId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: BOARDS_LOADING, payload: true });
      const board = await axios.delete(
        `${process.env.REACT_APP_URL_BACK}/boards/${boardId}`
      );
      dispatch({ type: DELETE_BOARD, payload: boardId });
      dispatch({ type: BOARDS_LOADING, payload: false });
      toast.success("Tablero eliminado.");
    } catch (err) {
      toast.error("No pudimos eliminar el tablero, inténtalo más tarde.");
    }
  };
};

export const updateBoard = (boardId, data) => {
  return async function (dispatch) {
    try {
      const board = await axios.put(
        `${process.env.REACT_APP_URL_BACK}/boards/${boardId}`,
        data
      );
      dispatch({ type: UPDATE_BOARD, payload: data });
    } catch (err) {
      toast.error("No pudimos Actualizar el tablero, inténtalo más tarde.");
    }
  };
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARDS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case THE_BOARDS_SUCCESS:
      return {
        ...state,
        theBoards: action.payload,
      };
    case DELETE_BOARD:
      return {
        ...state,
        theBoards: state.theBoards.filter(
          (item) => item._id !== action.payload
        ),
      };
    case UPDATE_BOARD:
      return {
        ...state,
        theBoards: state.theBoards.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case BOARDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
