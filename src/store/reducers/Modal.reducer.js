import axios from "axios";

export const ACTIVATE = "ACTIVATE";
export const DESACTIVATE = "DESACTIVATE";
export const CARDS_GET = "CARDS_GET";

export const getCards = () => {
  return async function (dispatch) {
    try {
      const cards = await axios.get("http://localhost:8080/cards", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: CARDS_GET, payload: cards });
    } catch (err) {}
  };
};

const initialState = {
  modal: false,
  cards: [],
  loading: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE:
      return { ...state, modal: action.payload };
    case CARDS_GET:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};
