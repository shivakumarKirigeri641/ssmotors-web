import { createSlice } from "@reduxjs/toolkit";

const customerDetailsSlice = createSlice({
  name: "customerDetails",
  initialState: {
    customername: null,
    primarymobilenumber: null,
    secondarymobilenumber: null,
    email: null,
    address: null,
  },
  reducers: {
    addCustomerDetails_name: (state, action) => {
      state.customername = action.payload;
    },
    addCustomerDetails_primarymobilenumber: (state, action) => {
      state.primarymobilenumber = action.payload;
    },
    addCustomerDetails_secondarymobilenumber: (state, action) => {
      state.secondarymobilenumber = action.payload;
    },
    addCustomerDetails_email: (state, action) => {
      state.email = action.payload;
    },
    addCustomerDetails_address: (state, action) => {
      state.address = action.payload;
    },
    removeCustomerDetails_name: (state, action) => {
      state.customername = null;
    },
    removeCustomerDetails_primarymobilenumber: (state, action) => {
      state.primarymobilenumber = null;
    },
    removeCustomerDetails_secondarymobilenumber: (state, action) => {
      state.secondarymobilenumber = null;
    },
    removeCustomerDetails_email: (state, action) => {
      state.email = null;
    },
    removeCustomerDetails_removeaddress: (state, action) => {
      state.removeress = null;
    },
  },
});

export const {
  addCustomerDetails_address,
  addCustomerDetails_email,
  addCustomerDetails_name,
  addCustomerDetails_primarymobilenumber,
  addCustomerDetails_secondarymobilenumber,
  removeCustomerDetails_email,
  removeCustomerDetails_name,
  removeCustomerDetails_primarymobilenumber,
  removeCustomerDetails_removeaddress,
  removeCustomerDetails_secondarymobilenumber,
} = customerDetailsSlice.actions;
export default customerDetailsSlice.reducer;
