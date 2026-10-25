import React, { useState, createContext, useEffect } from 'react'

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
       return getInitialTransactions();
    });

    function getInitialTransactions () {
        try {
            const localTransaction = localStorage.getItem("Transactions");
            const parseTransaction = JSON.parse(localTransaction);
            if (Array.isArray(parseTransaction)) {
                return parseTransaction ;
            }
            console.log(parseTransaction)
            return [];
        }
        catch (error) {
            console.log(error);
            return [];
        }
    };

    useEffect(() => {
        // console.log(transactions, Array.isArray(transactions), transactions.length)
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
