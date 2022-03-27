import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "296.74",
    date: new Date(2022, 3, 25),
  },
  {
    id: "e2",
    title: "New TV",
    amount: "300.74",
    date: new Date(2021, 4, 15),
  },
  {
    id: "e5",
    title: "New TV 1",
    amount: "300.74",
    date: new Date(2021, 5, 15),
  },
  {
    id: "e6",
    title: "New TV 2",
    amount: "400.74",
    date: new Date(2021, 6, 16),
  },
  {
    id: "e7",
    title: "New TV 2",
    amount: "450.74",
    date: new Date(2021, 6, 19),
  },
  {
    id: "e3",
    title: "Buy BTC",
    amount: "500.14",
    date: new Date(2020, 5, 14),
  },
  {
    id: "e8",
    title: "Buy ETH",
    amount: "505.14",
    date: new Date(2020, 5, 16),
  },
  {
    id: "e4",
    title: "Buy Headphone",
    amount: "1000.74",
    date: new Date(2022, 6, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
