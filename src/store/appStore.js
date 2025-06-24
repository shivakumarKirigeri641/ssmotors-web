const { configureStore } = require("@reduxjs/toolkit");
import adminReducer from "./slices/adminSlice";
import servicingVehiclesReducer from "./slices/servicingVehiclesSlice";
const appStore = configureStore({
  reducer: {
    admin: adminReducer,
    servicingVehicles: servicingVehiclesReducer,
  },
});
export default appStore;
