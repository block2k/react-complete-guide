import "./ExpenseDate.css";

function ExpenseDate(props) {
  const dateRequest = new Date(props.date * 1000);
  const month = dateRequest.toLocaleString("en-US", { month: "long" });
  const day = dateRequest.toLocaleString("en-US", { day: "2-digit" });
  const year = dateRequest.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
