import { createStore } from "redux";

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
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
};

const reducer = (state = initState, action) => {
  // You can add more functionality to the reducer if needed
  return state;
};

const store = createStore(reducer);

export default store;
