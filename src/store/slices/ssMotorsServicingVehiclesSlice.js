import { createSlice } from "@reduxjs/toolkit";

const ssMotorsServicingVehiclesSlice = createSlice({
  name: "ssMotorsServicingVehicles",
  initialState: null,
  reducers: {
    addServicingVehicles: (state, action) => {
      return action.payload;
    },
    removeServicingVehicles: (state) => {
      return null;
    },
  },
});
export const { addServicingVehicles, removeServicingVehicles } =
  ssMotorsServicingVehiclesSlice.actions;
export default ssMotorsServicingVehiclesSlice.reducer;
