import { combineReducers } from "redux";

import testReducer from "./test.reducer";
import libraryReducer from "./library.reducer";

export default combineReducers({
  testReducer,
  libraryReducer
});
