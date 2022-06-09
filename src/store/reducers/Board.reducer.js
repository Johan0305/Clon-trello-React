import axios from "axios";
const BOARDS_SUCCESS = "BOARDS_SUCCESS";
const BOARDS_ERROR = "BOARDS_ERROR";
const BOARDS_LOADING = "BOARDS_LOADING";

//action creator
export const getBoards = (payload) => {
  return async function (dispatch) {
    dispatch({ type: BOARDS_LOADING, payload: true });
    try {
      const user = await axios.get("http://localhost:8080/users/myuser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: BOARDS_SUCCESS, payload: user.data.data.boards });
      dispatch({ type: BOARDS_LOADING, payload: false });
    } catch (err) {
      dispatch({ type: BOARDS_ERROR, payload: err });
      dispatch({ type: BOARDS_LOADING, payload: false });
    }
  };
};

const initialState = {
  boards: [],
  loading: false,
  error: null,
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARDS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BOARDS_SUCCESS:
      return {
        ...state,
        boards: action.payload,
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
