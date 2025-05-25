import { configureStore } from "@reduxjs/toolkit";
import ssMotorsadminReducer from "./slices/ssMotorsadminSlices";
const ssMotorsStore = configureStore({
  reducer: {
    ssMotorsadmin: ssMotorsadminReducer,
  },
});
export default ssMotorsStore;
