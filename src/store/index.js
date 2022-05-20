import { createStore, combineReducers } from "redux";
import { modalReducer } from "./reducers/Modal.reducer";

const rootReducer = combineReducers({
  modalReducer,
});

export const store = createStore(rootReducer);
