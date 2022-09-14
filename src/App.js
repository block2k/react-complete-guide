import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

var API = "http://127.0.0.1:8080/api/v1/";

function App() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(API + "account").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  // console.log(APIData);

  const addExpenseHandler = (APIData) => {
    setAPIData((prevExpenses) => {
      return [APIData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={APIData} />
      <ToastContainer />
    </div>
  );
}

export default App;
