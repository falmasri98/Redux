import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./layout/Navbar";

const App = () => {
  const accounts = useSelector((state) => state.accounts);

  return (
    <div>
      <header>
        <h1>Bank App</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Account Number</th>
              <th>Account Type</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.customerName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.accountType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <p>Bank App Footer</p>
      </footer>
    </div>
  );
};

export default App;
