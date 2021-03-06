import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer, { INITIAL_STATE } from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else if (JSON.parse(serializedState).appVersion < INITIAL_STATE.appVersion) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export default () => {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
