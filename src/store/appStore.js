const { configureStore } = require("@reduxjs/toolkit");
import adminReducer from "./slices/adminSlice";
const appStore = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
export default appStore;
