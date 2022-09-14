import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Course</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="ITE302c">ITE302c</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
