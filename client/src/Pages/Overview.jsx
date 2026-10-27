import React,{useState, useContext} from 'react'
import SummaryCard from '../component/SummaryCard.jsx';
import { Expenses, weeklyChartData } from "../component/Array.js";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TransactionContext } from '../context/TransactionContext.jsx';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../component/utils.js';
// import { Cursor } from 'recharts/types/component/Cursor.js';

const CustomRechartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-[#F1EAD9] rounded-md">
        <p className="font-medium text-lg text-[#21262B]">{label}</p>
        <p className="text-[#D9A441]">
          <span>total: &#8358;</span>
          <span>{payload[0].value}</span>
        </p>
      </div>
    );

  }
 };

const Overview = () => {
  const { transactions } = useContext(TransactionContext);
  const recentTransactions = transactions.slice(-5).reverse();
  const greeting = () => {
  const time = new Date().getHours();
    if (time <12) {
      return 'morning'
    }
    else if (time <= 18) {
      return 'afternoon'
    }
    else {
      return 'evening'
    }
  }
  const displayRecentTransactions = () => {
    return recentTransactions.map((expense, idx) => (
      <li
        key={expense.id}
        className="flex items-center py-2 border-b border-[#F1EAD9]"
      >
        <p className="text-[#4b2e4d]/80 text-[15px] ">{expense.title}</p>
        <p className="ml-auto text-[#21262B] text-[15px] font-medium ">
          {formatCurrency(expense.amount)}
        </p>
      </li>
    ));
  };
  // income
  const incomeCalculation = () => {
    return transactions
      .filter((value) => {
        return value.transaction === "income";
      })
      .reduce((total, value) => {
        return total + value.amount;
      },0);
  };
  const income = incomeCalculation();
  

  // Expense
  const expenseCalculation = () => {
    return transactions
      .filter((value) => {
        return value.transaction === "expense";
      })
      .reduce((total, value) => {
        return total + value.amount;
      }, 0);
  };
  const expense = expenseCalculation();
  // total balance
  const totalBalance = income - expense;
  return (
    <section className="overflow-x-hidden flex flex-col h-full">
      <header className="mb-4">
        <h2 className=" font-semibold text-[#21262B] text-[26px] ">
          Good {greeting()}!!
        </h2>
        <p className="text-[#4B2E4D]/50 ">
          Here's an overview of your finances.
        </p>
      </header>

      <div className="flex gap-4 justify-start mb-8">
        <SummaryCard
          title="Income"
          content={formatCurrency(income)}
        />
        <SummaryCard
          title="Total Balance"
          content={formatCurrency(totalBalance)}
        />
        <SummaryCard  title="Expenses" content={formatCurrency(expense)} />
      </div>

      <main className="flex mt-auto justify-between gap-4 flex-col lg:flex-row">
        <section className="flex-1 border-2 border-[#f2d1f5] rounded-xl px-4 py-2 flex flex-col">
          <h3 className="text-[#21262B] font-bold lg:text-lg">
            Expenses over time(this week){" "}
          </h3>

          {/* RECHART below */}
          <div className="mt-auto">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={weeklyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip content={<CustomRechartTooltip />} cursor={false} />
                <Bar dataKey="total" fill="#D9A441" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="min-w-90 max-h-115 overflow-y-auto border-2 border-[#f2d1f5] rounded-xl px-4 py-2 ">
          <h3 className="text-[#21262B] mb-2 font-bold ">
            Your recently uploaded transactions
          </h3>
          <ul>
            {Array.isArray(recentTransactions) &&
            recentTransactions.length > 0 ? (
              displayRecentTransactions()
            ) : (
              <li>
                No transactions yet.
                <Link
                  to="/add-Transaction"
                  className="underline underline-offset-2 text-[#0944c4]"
                >
                  &nbsp;Click to add your first transaction!
                </Link>
              </li>
            )}
          </ul>
        </section>
      </main>
      {/* <Link to="/add-Transaction">Add transaction</Link> */}
    </section>
  );
}

export default Overview

