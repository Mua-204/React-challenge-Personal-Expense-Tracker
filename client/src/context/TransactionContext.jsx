import React, { useState, createContext, useEffect } from 'react'

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
        const localTransaction = localStorage.getItem("Transactions");
        const parseTransaction = JSON.parse(localTransaction);
            return(parseTransaction || [])
    })

    useEffect(() => {
        console.log(transactions, Array.isArray(transactions), transactions.length)
        const stringingTransaction = JSON.stringify(transactions)
        localStorage.setItem("Transactions",stringingTransaction)
        
    },[transactions])

    return (
        <TransactionContext.Provider value={{transactions, setTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
 };
export { TransactionProvider, TransactionContext};
