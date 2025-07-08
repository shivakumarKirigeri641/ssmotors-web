const { createSlice } = require("@reduxjs/toolkit");

const editVehicleFullDetailsSlice = createSlice({
  name: "editVehicleFullDetails",
  initialState: null,
  reducers: {
    addeditVehicleFullDetails: (state, action) => {
      return action.payload;
    },
    removeeditVehicleFullDetails: (state, action) => {
      return null;
    },
  },
});
export const { addeditVehicleFullDetails, removeeditVehicleFullDetails } =
  editVehicleFullDetailsSlice.actions;
export default editVehicleFullDetailsSlice.reducer;
