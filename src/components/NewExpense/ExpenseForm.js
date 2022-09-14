import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./ExpenseForm.css";
import "react-toastify/dist/ReactToastify.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCourse, setEnteredCourse] = useState("ITE302c");
  const [enteredFacebook, setEnteredFacebook] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function facebookChangeHandler(event) {
    setEnteredFacebook(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredCourse(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredTitle || !enteredAmount) {
      toast.warn("Nhập tài khoản mật khẩu coursera của bạn", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const expenseData = {
      id: Math.random(),
      account: enteredTitle,
      password: enteredAmount,
      course_code: enteredCourse,
      order_date: new Date().getTime() / 1000,
      facebook_user: enteredFacebook,
      status: "Ordered",
    };

    axios.post(`http://localhost:8080/api/v1/create-user`, {
      account: enteredTitle,
      password: enteredAmount,
      course_code: enteredCourse,
      order_date: new Date().getTime() / 1000,
      facebook_user: enteredFacebook,
      status: "Ordered",
      // expenseData,
    });

    toast.success(
      "Yêu cầu thành công, vui lòng đợi trong khi chúng tôi kiểm tra giao dịch",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredCourse("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tài khoản coursera</label>
          <input
            type="email"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Mật khẩu coursera</label>
          <input
            type="password"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Facebook của bạn</label>
          <input
            type="text"
            value={enteredFacebook}
            onChange={facebookChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Mã môn coursera</label>
          <select onChange={dateChangeHandler} value={enteredCourse}>
            <option value="ITE302c">ITE302c - 160K</option>
          </select>
        </div>
      </div>
      <div className="new-expense__control">
        <p>
          Nhập tài khoản cousera của bạn, sau đó chuyển khoản theo nội dung sau
        </p>
        <p>
          Ngân hàng VPBANK : <span className="color-red">694788888386</span>
        </p>
        <p>
          Chủ tài khoản : <span className="color-red">Bùi Đức Long</span>
        </p>
        <p>
          Số tiền : <span className="color-red">160.000 đ</span>
        </p>
        <p>
          Nội dung chuyển khoản :
          <span className="color-red">
            {" "}
            ITE302c {enteredTitle.split("@")[0]}
          </span>
        </p>
        <hr />
        <p>
          * Nếu bạn có vấn đề cần hỗ trợ:{" "}
          <a target="blank" href="https://www.messenger.com/t/bl0ck2k">
            Chat ngay
          </a>
        </p>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Order</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
