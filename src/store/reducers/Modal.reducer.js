export const ACTIVATE = "ACTIVATE";
export const DESACTIVATE = "DESACTIVATE";

const initialState = {
  modal: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE:
      return { ...state, modal: action.payload };
    case DESACTIVATE:
      return { ...initialState };
    default:
      return state;
  }
};
