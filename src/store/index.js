import { createStore, combineReducers } from "redux";
import { modalReducer } from "./reducers/Modal.reducer";
import { navReducer } from "./reducers/Nav.reducer";

const rootReducer = combineReducers({
  modalReducer,
  navReducer,
});

export const store = createStore(rootReducer);
