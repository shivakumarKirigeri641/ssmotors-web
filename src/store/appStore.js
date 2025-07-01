const { configureStore } = require("@reduxjs/toolkit");
import adminReducer from "./slices/adminSlice";
import servicingVehiclesReducer from "./slices/servicingVehiclesSlice";
import servicedVehiclesReducer from "./slices/serviciedVehiclesSlice";
import allVehiclesReducer from "./slices/allVehiclesSlice";
import vehicleNumbersReducer from "./slices/vehicleNumbersSlice";
import newVehicleDetailsReducer from "./slices/newVehicleDetailsSlice";
import customerDetailsReducer from "./slices/customerDetailsSlice";
const appStore = configureStore({
  reducer: {
    admin: adminReducer,
    servicingVehicles: servicingVehiclesReducer,
    servicedVehicles: servicedVehiclesReducer,
    allVehicles: allVehiclesReducer,
    newVehicleDetails: newVehicleDetailsReducer,
    customerDetails: customerDetailsReducer,
  },
});
export default appStore;
