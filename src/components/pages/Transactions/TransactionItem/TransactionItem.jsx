import './TransactionItem.css';
// import { LoginStateContext } from '../../../App';
// import { useContext, useState } from 'react';

function TransactionItem({ accountTitle, accountAmount, accountDescription }) {
  const transactions = [
    {
      id: 1,
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: 5,
      balance: 2082.79,
      type: "Electronic",
      category: "Food"
    },
    {
      id: 2,
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: 5,
      balance: 2082.79,
      type: "Electronic",
      category: "Food"
    },
    {
      id: 3,
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: 5,
      balance: 2082.79,
      type: "Electronic",
      category: "Food"
    },
    {
      id: 4,
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: 5,
      balance: 2082.79,
      type: "Electronic",
      category: "Food"
    },
    {
      id: 5,
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: 5,
      balance: 2082.79,
      type: "Electronic",
      category: "Food"
    },
    {
      id: 6,
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      amount: 5,
      balance: 2082.79,
      type: "Electronic",
      category: "Food"
    }
  ]

  return (
    <main className="user-main bg-dark">
      <div className="header">
        {/* <h1>{accountTitle}</h1>
        <p>{accountAmount}</p>
        <p>{accountDescription}</p> */}
        <h1>Argent Bank Checking (x8349)</h1>
        <p>$2,082.79</p>
        <p>Available Balance</p>
      </div>
    
    </main>
  );
}

export default TransactionItem;