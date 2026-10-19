import React from 'react'
import SummaryCard from '../component/SummaryCard.jsx';
import { Expenses, weeklyChartData } from "../component/Array.js";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
// import { Cursor } from 'recharts/types/component/Cursor.js';

const CustomRechartTooltip = ({active,payload,label}) => {
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
        <SummaryCard showCurrency={true} title="Income" content="54,000" />
        <SummaryCard
          showCurrency={true}
          title="Total Balance"
          content="5,000"
        />
        <SummaryCard showCurrency={true} title="Expenses" content="49,000" />
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
            Recent transactions
          </h3>
          <ul>
            {Expenses.map((expense, idx) => (
              <li
                key={idx}
                className="flex items-center py-2 border-b border-[#F1EAD9]"
              >
                <p className="text-[#4b2e4d]/80 text-[15px] ">
                  {expense.title}
                </p>
                <p className="ml-auto text-[#21262B] text-[15px] font-medium ">
                  &#8358;{expense.amount}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      {/* <Link to="/add-Transaction">Add transaction</Link> */}
    </section>
  );
}

export default Overview

