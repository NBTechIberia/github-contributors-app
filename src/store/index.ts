import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";
import { dashboardReducer } from "../reducers/dashboardReducer";
import { settingsReducer } from "../reducers/settingsReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  dashboard: dashboardReducer,
  settings: settingsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
