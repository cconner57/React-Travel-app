import { createStore } from "redux";
import rootReducer from "../ReduxReducers/index";

const store = createStore(rootReducer);

export default store;