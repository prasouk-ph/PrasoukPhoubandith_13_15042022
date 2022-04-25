import { useParams, useNavigate } from "react-router-dom";
import './Transactions.css';
import React, { useEffect, useMemo, useState } from 'react';
import TransactionTable from "./TransactionTable/TransactionTable";
import { accounts } from '../../../data/accounts'

const getData = () => [
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
];


function Transactions() {
  const { id } = useParams();
  let navigate = useNavigate()

  const [dataIsValid, setDataIsValid] = useState(null)

  const currentAccount = accounts.filter(account => account.id === parseInt(id))[0]

  
  function checkData() {
    if (currentAccount === undefined) {
      console.log("ID inexistant !");
      setDataIsValid(false)
      navigate(`/404`);
    } else {
      setDataIsValid(true)
    }
  }

  useEffect(() => {
    checkData()
  })

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date", // accessor value corresponding to key name from data
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
    ],
    []
  );

  const data = useMemo(() => getData(), []);

  if (dataIsValid) {
    return (
      <div>
        <header className="transactions-header">
          <h1>{currentAccount.title}</h1>
          <p>{currentAccount.amount}</p>
          <p>{currentAccount.description}</p>
        </header>

        <main className="transactions-main bg-dark">
          <TransactionTable columns={columns} data={data} />
        </main>
      </div>
    )
  }
}

export default Transactions;