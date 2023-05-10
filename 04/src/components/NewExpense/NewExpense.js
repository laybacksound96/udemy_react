import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openHandler = () => {
    setIsOpened((prev) => {
      return !prev;
    });
  };
  return (
    <div className="new-expense">
      {isOpened ? (
        <ExpenseForm onOpen={openHandler} />
      ) : (
        <button onClick={openHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
