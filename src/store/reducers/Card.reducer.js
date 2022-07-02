import axios from "axios";
import { getLists } from "./List.reducer";
const CARDS_SUCCESS = "CARDS_SUCCESS";
const CARDS_ERROR = "CARDS_ERROR";
const CARDS_LOADING = "CARDS_LOADING";
const DELETE_CARD = "DELETE_CARD";
const UPDATE_CARD = "UPDATE_CARD";

export const getCards = (listId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: CARDS_LOADING, payload: true });
      const lists = await axios.get(
        `${process.env.REACT_APP_URL_BACK}/cards/${listId}`
      );
      dispatch({ type: CARDS_SUCCESS, payload: lists.data.data });
      dispatch({ type: CARDS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: CARDS_ERROR, payload: err });
    }
  };
};

export const postCard = (listId, newCard, boardId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: CARDS_LOADING, payload: true });
      const card = await axios.post(
        `${process.env.REACT_APP_URL_BACK}/cards/${listId}`,
        {
          name: newCard,
        }
      );
      dispatch(getLists(boardId));
      dispatch({ type: CARDS_SUCCESS, payload: card });
      dispatch({ type: CARDS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: CARDS_ERROR, payload: err });
    }
  };
};

export const deleteCard = (cardId, listId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: CARDS_LOADING, payload: true });
      const card = await axios.delete(
        `${process.env.REACT_APP_URL_BACK}/cards/${cardId}`
      );
      dispatch({ type: DELETE_CARD, payload: cardId });
      try {
        dispatch({ type: CARDS_LOADING, payload: true });
        const cards = await axios.get(
          `${process.env.REACT_APP_URL_BACK}/cards/${listId}`
        );
        dispatch({ type: CARDS_SUCCESS, payload: cards.data.data });
        dispatch({ type: CARDS_LOADING, payload: false });
      } catch (err) {
        dispatch({ type: CARDS_ERROR, payload: err });
      }
      dispatch({ type: CARDS_LOADING, payload: false });
    } catch (err) {
      alert("No se pudo borrar el tablero");
    }
  };
};

const initialState = {
  cards: [],
  loadingCards: false,
  error: null,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.lists.filter((item) => item._id !== action.payload),
      };
    case CARDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
