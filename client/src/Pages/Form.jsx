// Possible correction to be made
{
  /*
  1. Your date comment is correct! toISOString() uses UTC, which can give you the wrong local date around midnight. We'll fix that before moving on.
  2. Your category options include both income and expense categories. Your current code allows someone to select an income category while the transaction type is set to expense. Later, we can make the category options respond to the selected transaction type.
  */
}
import React, { useState, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

const Form = () => {
  const [expenseInput, setExpenseInput] = useState({
    expense_name: "",
    amount: "",
    expense_category: "",
    // remember to correct the UTC date stuff ohh
    date: new Date().toISOString().split("T")[0],
    transaction:'expense',
  });

  const { transactions, setTransactions } = useContext(TransactionContext);

  const setInput = (e) => {
    setExpenseInput(prev => ({...prev, [e.target.name]:e.target.value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = expenseInput;

    const newTransaction={id: Date.now(), title:result.expense_name, amount:Number(result.amount),date:result.date, category:result.expense_category,transaction:result.transaction}

    setTransactions(prev=>{return([...prev,newTransaction])})

    
  }

  return (
    <div className="border-2 rounded-lg sm:w-[300px] md:w-[450px] px-5 pt-5 pb-3 max-h-full overflow-y-auto">
      <h3 className="font-bold mb-3 text-[#21262B] md:text-lg">
        Add an expense
      </h3>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2.5">
        {/* expense name */}
        <p className="flex flex-col">
          <label
            htmlFor="expense_name"
            className="font-medium text-[#4B2E4D] text-[14px] "
          >
            Expense name
          </label>
          <input
            required
            name="expense_name"
            value={expenseInput.expense_name}
            onChange={setInput}
            type="text"
            id="expense_name"
            className="border-2 rounded-lg border-[#D9A441] bg-[#F1EAD9] focus:outline-none px-2 "
          />
        </p>
        {/* amount */}
        <p className="flex flex-col">
          <label
            htmlFor="amount"
            className="font-medium text-[#4B2E4D] text-[14px] "
          >
            Amount (&#8358;)
          </label>
          <input
            step="1"
            required
            value={expenseInput.amount}
            name="amount"
            onChange={setInput}
            min="10"
            id="amount"
            type="number"
            className="border-2 rounded-lg border-[#D9A441] bg-[#F1EAD9] focus:outline-none px-2 "
          />
        </p>
        {/* category */}
        <p className="flex flex-col">
          <label
            htmlFor="category"
            className="font-medium text-[#4B2E4D] text-[14px] "
          >
            Category
          </label>
          <select
            name="expense_category"
            onChange={setInput}
            value={expenseInput.expense_category}
            id="category"
            required
            className="border-2 rounded-lg border-[#D9A441] bg-[#F1EAD9] focus:outline-none px-2 "
          >
            <option disabled value="" >Choose a category</option>
            <optgroup label="Expenses">
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Bills">Bills</option>
              <option value="Shopping">Shopping</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Personal care">Personal care</option>
              <option value="Other">Other</option>
            </optgroup>
            <optgroup label="Income">
              <option value="Job salary">Job salary</option>
              <option value="investment return">Investment returns</option>
            </optgroup>
          </select>
        </p>
        {/* date */}
        <p className="flex flex-col">
          <label
            htmlFor="expense_date"
            className="font-medium text-[#4B2E4D] text-[14px] "
          >
            Date
          </label>
          <input
            type="date"
            value={expenseInput.date}
            onChange={setInput}
            name="date"
            id="expense_date"
            className="border-2 rounded-lg border-[#D9A441] bg-[#F1EAD9] focus:outline-none px-2 "
          />
        </p>
        {/* transaction type */}
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[#4B2E4D] text-[14px] ">
            Transaction type
          </p>

          <div>
            <p>
              <input
                type="radio"
                id="income-radio"
                name="transaction"
                value="income"
                checked={expenseInput.transaction === "income"}
                onChange={setInput}
                className="accent-[#D9A441] bg-[#F1EAD9] focus:outline-none mr-1 ml-2"
              />
              <label
                htmlFor="income-radio"
                className="font-medium text-[#4B2E4D] text-[16px] "
              >
                income
              </label>
            </p>

            <p>
              <input
                type="radio"
                name="transaction"
                id="expense-radio"
                checked={expenseInput.transaction === "expense"}
                value="expense"
                onChange={setInput}
                className="accent-[#D9A441] mr-1 ml-2"
              />
              <label
                htmlFor="expense-radio"
                className="font-medium text-[#4B2E4D] text-[16px] "
              >
                expense
              </label>
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-9.5 bg-[#D9A441] text-[#21262B]  mb-2 w-full rounded-lg py-2 font-medium hover:bg-[#D9A441]/85  hover:ease-in-out duration-500 cursor-pointer"
        >
          Save Transaction
        </button>
      </form>
    </div>
  );
}

export default Form
