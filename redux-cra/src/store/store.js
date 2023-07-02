import { configureStore } from "@reduxjs/toolkit";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Hind Saed",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Noor Sami",
      accountNumber: "987634",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Farah al-masri",
      accountNumber: "557654",
      accountType: "Student accounts",
    },
  ],
};

const reducer = (state = initState, action) => {
  // You can add more functionality to the reducer if needed
  return state;
};

const store = configureStore({
  reducer: reducer,
});

export default store;
