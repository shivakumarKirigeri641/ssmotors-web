const { configureStore } = require("@reduxjs/toolkit");
import adminReducer from "./slices/adminSlice";
import servicingVehiclesReducer from "./slices/servicingVehiclesSlice";
import servicedVehiclesReducer from "./slices/serviciedVehiclesSlice";
import allVehiclesReducer from "./slices/allVehiclesSlice";
import vehicleNumbersReducer from "./slices/vehicleNumbersSlice";
import newVehicleDetailsReducer from "./slices/newVehicleDetailsSlice";
import customerDetailsReducer from "./slices/customerDetailsSlice";
import customercomplaintsReducer from "./slices/customerComplaintsSlice";
import selectedServiceDateReducer from "./slices/selectedServiceDateSlice";
import editVehicleFullDetailsReducer from "../store/slices/editVehicleFullDetailsSlice";
const appStore = configureStore({
  reducer: {
    admin: adminReducer,
    servicingVehicles: servicingVehiclesReducer,
    servicedVehicles: servicedVehiclesReducer,
    customercomplaints: customercomplaintsReducer,
    allVehicles: allVehiclesReducer,
    selectedServiceDate: selectedServiceDateReducer,
    newVehicleDetails: newVehicleDetailsReducer,
    vehicleNumbers: vehicleNumbersReducer,
    customerDetails: customerDetailsReducer,
    editVehicleFullDetails: editVehicleFullDetailsReducer,
  },
});
export default appStore;
