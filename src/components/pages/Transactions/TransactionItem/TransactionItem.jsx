import React, { useState } from 'react';
import './TransactionItem.css';

function TransactionItem({ transactionDate, transactionDescription, transactionAmount, transactionBalance }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive)
  }

  return (
    <tr className='transaction-item' onClick={handleClick}>
      <td>{transactionDate}</td>
      <td>{transactionDescription}</td>
      <td>{`$ ${transactionAmount}`}</td>
      <td>{`$ ${transactionBalance}`}</td>
    </tr>
  );
}

export default TransactionItem;