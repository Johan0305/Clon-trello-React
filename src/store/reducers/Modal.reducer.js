export const ACTIVATE = "ACTIVATE";
export const DESACTIVATE = "DESACTIVATE";

const initialState = {
  modal: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE:
      return { ...state, modal: true };
    case DESACTIVATE:
      return { ...state, modal: false };
    default:
      return state;
  }
};
