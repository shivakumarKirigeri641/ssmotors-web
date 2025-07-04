const { createSlice } = require("@reduxjs/toolkit");

const newVehicleDetailsSlice = createSlice({
  name: "newVehicleDetails",
  initialState: {
    vehiclenumber: null,
    vehicleVariant: null,
    fuelPresent: 1,
    vehicleForServiceIn: null,
    vehicleForServiceOut: null,
    kmDriven: 0,
    isElectric: false,
  },
  reducers: {
    addNewVehicleDetails_vehicleNumber: (state, action) => {
      state.vehiclenumber = action.payload;
    },
    addNewVehicleDetails_vehicleVariant: (state, action) => {
      state.vehicleVariant = action.payload;
    },
    addNewVehicleDetails_fuelPresent: (state, action) => {
      state.fuelPresent = action.payload;
    },
    addNewVehicleDetails_vehicleForServiceIn: (state, action) => {
      state.vehicleForServiceIn = action.payload;
    },
    addNewVehicleDetails_vehicleForServiceOut: (state, action) => {
      state.vehicleForServiceOut = action.payload;
    },
    addNewVehicleDetails_kmDriven: (state, action) => {
      state.kmDriven = action.payload;
    },
    addNewVehicleDetails_isElectric: (state, action) => {
      state.isElectric = action.payload;
    },
    removeNewVehicleDetails_vehicleNumber: (state, action) => {
      state.vehiclenumber = null;
    },
    removeNewVehicleDetails_vehicleVariant: (state, action) => {
      state.vehicleVariant = null;
    },
    removeNewVehicleDetails_fuelPresent: (state, action) => {
      state.fuelPresent = 1;
    },
    removeNewVehicleDetails_vehicleForServiceIn: (state, action) => {
      state.vehicleForServiceIn = null;
    },
    removeNewVehicleDetails_vehicleForServiceOut: (state, action) => {
      state.vehicleForServiceOut = null;
    },
    removeNewVehicleDetails_kmDriven: (state, action) => {
      state.kmDriven = 0;
    },
    removeNewVehicleDetails_isElectric: (state, action) => {
      state.isElectric = false;
    },
    removeAll: (state, action) => {
      state.fuelPresent = 1;
      state.isElectric = false;
      state.kmDriven = 0;
      state.vehicleForServiceIn = null;
      state.vehicleForServiceOut = null;
      state.vehicleVariant = null;
      state.vehiclenumber = null;
    },
  },
});
export const {
  addNewVehicleDetails_fuelPresent,
  addNewVehicleDetails_isElectric,
  addNewVehicleDetails_kmDriven,
  addNewVehicleDetails_vehicleForServiceIn,
  addNewVehicleDetails_vehicleForServiceOut,
  addNewVehicleDetails_vehicleNumber,
  addNewVehicleDetails_vehicleVariant,
  removeNewVehicleDetails_fuelPresent,
  removeNewVehicleDetails_isElectric,
  removeNewVehicleDetails_kmDriven,
  removeNewVehicleDetails_vehicleForServiceIn,
  removeNewVehicleDetails_vehicleForServiceOut,
  removeNewVehicleDetails_vehicleNumber,
  removeNewVehicleDetails_vehicleVariant,
  removeAll,
} = newVehicleDetailsSlice.actions;
export default newVehicleDetailsSlice.reducer;
