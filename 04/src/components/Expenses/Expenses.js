import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearState, setYearState] = useState("2019");
  const onChangeYearHandler = (year) => {
    setYearState(year.target.value);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter value={yearState} onChangeYear={onChangeYearHandler} />
      {props.items.map((arr) => {
        return arr.date.getFullYear() === +yearState ? (
          <ExpenseItem
            title={arr.title}
            key={arr.id}
            amount={arr.amount}
            date={arr.date}
          />
        ) : null;
      })}
    </Card>
  );
};

export default Expenses;
