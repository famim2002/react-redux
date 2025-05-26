import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/countSlice"

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
