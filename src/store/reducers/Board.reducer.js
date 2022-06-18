import axios from "axios";
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
    dispatch({ type: BOARDS_LOADING, payload: true });
    try {
      const boards = await axios.get("http://localhost:8080/boards", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: THE_BOARDS_SUCCESS, payload: boards.data.data });
    } catch (err) {
      dispatch({ type: BOARDS_ERROR, payload: err });
    }
    dispatch({ type: BOARDS_LOADING, payload: false });
  };
};

export const deleteBoard = (boardId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: BOARDS_LOADING, payload: true });
      const board = await axios.delete(
        `http://localhost:8080/boards/${boardId}`
      );
      dispatch({ type: DELETE_BOARD, payload: boardId });
      dispatch({ type: BOARDS_LOADING, payload: false });
    } catch (err) {
      alert("No se pudo borrar el tablero");
    }
  };
};

export const updateBoard = (boardId, data) => {
  return async function (dispatch) {
    try {
      const board = await axios.put(
        `http://localhost:8080/boards/${boardId}`,
        data
      );
      dispatch({ type: UPDATE_BOARD, payload: data });
    } catch (err) {
      alert("No se pudo actualizar tu tablero");
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
