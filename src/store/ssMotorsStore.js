import { configureStore } from "@reduxjs/toolkit";
import ssMotorsadminReducer from "./slices/ssMotorsadminSlices";
import ssMotorsServedVehiclesReducer from "./slices/ssMotorsServedVehiclesSlice";
const ssMotorsStore = configureStore({
  reducer: {
    ssMotorsadmin: ssMotorsadminReducer,
    ssMotorsServedVehicles: ssMotorsServedVehiclesReducer,
  },
});
export default ssMotorsStore;
