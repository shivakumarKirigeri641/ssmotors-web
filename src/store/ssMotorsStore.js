import { configureStore } from "@reduxjs/toolkit";
import ssMotorsadminReducer from "./slices/ssMotorsadminSlices";
import ssMotorsServedVehiclesReducer from "./slices/ssMotorsServedVehiclesSlice";
import ssMotorsServicingVehiclesReducer from "./slices/ssMotorsServicingVehiclesSlice";
import ssMotorsServiceSummaryReducer from "./slices/ssMotorsServiceSummarySlices";
const ssMotorsStore = configureStore({
  reducer: {
    ssMotorsadmin: ssMotorsadminReducer,
    ssMotorsServedVehicles: ssMotorsServedVehiclesReducer,
    ssMotorsServicingVehicles: ssMotorsServicingVehiclesReducer,
    ssMotorsServiceSummary: ssMotorsServiceSummaryReducer,
  },
});
export default ssMotorsStore;
