import axios from "axios";

const TAGS_ERROR = "LISTS_ERROR";
const TAGS_LOADING = "LISTS_LOADING";
const DELETE_TAGS = "DELETE_LIST";
const UPDATE_TAGS = "UPDATE_LIST";

export const postTag = (cardId, data) => {
  return async function (dispatch) {
    try {
      dispatch({ type: TAGS_LOADING, payload: true });
      await axios.post(`http://localhost:8080/tags/${cardId}`, data);
      dispatch({ type: TAGS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: TAGS_ERROR, payload: err });
    }
  };
};

export const deleteTag = (cardId, tagId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: TAGS_LOADING, payload: true });
      await axios.delete(`http://localhost:8080/tags/${tagId}`);
      dispatch({ type: TAGS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: TAGS_ERROR, payload: err });
    }
  };
};

export const updateTag = (tagId, cardId, data) => {
  return async function (dispatch) {
    dispatch({ type: TAGS_LOADING, payload: true });
    await axios.put(`http://localhost:8080/tags/${tagId}`, data);
    dispatch({ type: TAGS_LOADING, payload: false });
  };
};

const initialState = {
  loading: false,
  error: null,
};

export const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAGS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_TAGS:
      return {
        ...state,
        tags: state.cards.filter((item) => item._id !== action.payload),
      };
    case TAGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
