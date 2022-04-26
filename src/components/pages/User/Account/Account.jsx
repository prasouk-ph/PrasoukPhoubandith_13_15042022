import './Account.css';
import { useNavigate } from "react-router-dom";


function Account({ accountId, accountTitle, accountAmount, accountDescription }) {
  let navigate = useNavigate();

  
  function handleClick() {
    navigate(`/transactions/${accountId}`);
  }

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{accountDescription}</p>
      </div>
      
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleClick}>View transactions</button>
      </div>
    </section>
  );
}

export default Account;