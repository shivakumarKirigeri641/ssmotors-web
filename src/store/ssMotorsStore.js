import { configureStore } from "@reduxjs/toolkit";
import ssMotorsadminReducer from "./slices/ssMotorsadminSlices";
import ssMotorsServedVehiclesReducer from "./slices/ssMotorsServedVehiclesSlice";
import ssMotorsServicingVehiclesReducer from "./slices/ssMotorsServicingVehiclesSlice";
const ssMotorsStore = configureStore({
  reducer: {
    ssMotorsadmin: ssMotorsadminReducer,
    ssMotorsServedVehicles: ssMotorsServedVehiclesReducer,
    ssMotorsServedVehicles: ssMotorsServicingVehiclesReducer,
  },
});
export default ssMotorsStore;
