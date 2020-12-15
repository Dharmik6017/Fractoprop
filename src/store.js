import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import createRootReducer from "./Reducers";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const initialState = {};
const middleware = [thunk, logger];

const store = createStore(
  createRootReducer(history),
  initialState,
  compose(
    composeWithDevTools(applyMiddleware(...middleware)),
    applyMiddleware(routerMiddleware(history))
  )
);

export default store;
