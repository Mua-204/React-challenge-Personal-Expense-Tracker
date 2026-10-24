import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import {Link,NavLink} from 'react-router-dom'

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);
  
  const showTransaction = () => {
    if (transactions.length > 0) {
       return( transactions.map((item, idx) => {
          return (
            <tr key={item.id} className="hover:bg-[#eadecc] transition-colors">
              <td className="p-3">{item.title}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.date}</td>
              <td className="p-3 font-semibold">
                ₦{item.amount.toLocaleString()}
              </td>
            </tr>
          );
       })
       )
    }
    else {
      return (
        <tr className="hover:bg-[#eadecc] transition-colors ml-1">
          <td className="p-3 text-center text-gray-500 italic" colSpan={4}>
            No transactions yet
          </td>
        </tr>
      );}
  }

  

  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-[#D9A441]">
        <table className="min-w-full divide-y divide-[#D9A441] bg-[#F1EAD9] text-left text-sm text-gray-800">
          <thead className="bg-[#D9A441] text-white font-medium">
            <tr>
              <th className="p-3">Expense</th>
              <th className="p-3">Category</th>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {showTransaction()}
          </tbody>
        </table>
      </div>
      <Link to="/add-Transaction">Add Expense </Link>
    </>
  );
}

export default Transactions
