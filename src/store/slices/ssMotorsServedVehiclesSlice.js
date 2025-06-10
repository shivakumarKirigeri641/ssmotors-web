import { createSlice } from "@reduxjs/toolkit";

const ssMotorsServedVehiclesSlice = createSlice({
  name: "ssMotorsServedVehicles",
  initialState: null,
  reducers: {
    addServedVehicles: (state, action) => {
      return action.payload;
    },
    removeServedVehicles: (state) => {
      return null;
    },
  },
});
export const { addServedVehicles, removeServedVehicles } =
  ssMotorsServedVehiclesSlice.actions;
export default ssMotorsServedVehiclesSlice.reducer;
