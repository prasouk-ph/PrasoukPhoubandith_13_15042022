import { useParams, useNavigate } from "react-router-dom";
import TransactionItem from './TransactionItem/TransactionItem'
import './Transactions.css';
import { AccountsDataContext } from '../../../App';
import { useContext, useEffect } from 'react';

function Transactions() {
  const { id } = useParams();
  let navigate = useNavigate()
  const accounts = useContext(AccountsDataContext);

  const currentAccount = accounts.filter(account => account.id === parseInt(id))[0]

  function checkData() {
    if (currentAccount.length === 0) {
      console.log("ID inexistant !");
      navigate(`/404`);
    }
  }

  useEffect(() => {
    checkData()
  })

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
    <div>
      <header className="transactions-header">
        <h1>{currentAccount.title}</h1>
        <p>{currentAccount.amount}</p>
        <p>{currentAccount.description}</p>
      </header>

      <main className="transactions-main bg-dark">
        <table className='transactions-table'>
          <thead>
            <tr>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {transactions.map(account => 
              <TransactionItem key={account.id} transactionDate={account.date} transactionDescription={account.description} transactionAmount={account.amount} transactionBalance={account.balance} />
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Transactions;