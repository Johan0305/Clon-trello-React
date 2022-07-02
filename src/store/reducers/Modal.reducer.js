export const ACTIVATE = "ACTIVATE";
export const DESACTIVATE = "DESACTIVATE";
export const CARDS_GET = "CARDS_GET";



const initialState = {
  modal: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
