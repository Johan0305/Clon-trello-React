import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./reducers/Modal.reducer";
import { navReducer } from "./reducers/Nav.reducer";
import { modalPopoverReducer } from "./reducers/ModalPopover.reducer";
import { boardReducer } from "./reducers/Board.reducer";
import { listReducer } from "./reducers/List.reducer";

const rootReducer = combineReducers({
  modalReducer,
  navReducer,
  modalPopoverReducer,
  boardReducer,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
