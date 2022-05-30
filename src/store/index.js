import { createStore, combineReducers } from "redux";
import { modalReducer } from "./reducers/Modal.reducer";
import { navReducer } from "./reducers/Nav.reducer";
import { modalPopoverReducer } from "./reducers/ModalPopover.reducer";

const rootReducer = combineReducers({
  modalReducer,
  navReducer,
  modalPopoverReducer,
});

export const store = createStore(rootReducer);
