import Account from './Account/Account';
import './User.css';
import { LoginStateContext } from '../../../App';
import { useContext, useState } from 'react';

function User() {
  const { userFirstName, setUserFirstName, userLastName, setUserLastName } = useContext(LoginStateContext);

  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    setEditMode(true)
  }

  function handleSubmit(event) {
    const { firstname, lastname } = event.target

    event.preventDefault()

    if (firstname.value !== '' || lastname.value !== '') {
      setUserFirstName(firstname.value)
      setUserLastName(lastname.value)
    }

    setEditMode(false)
  }

  return (
    <main className="user-main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{`${userFirstName} ${userLastName}`} !</h1>

        {editMode ?
          <form className='name-edit' onSubmit={handleSubmit}>
            <input className='name-edit-input' type="text" name='firstname' placeholder='Enter your first name' />
            <input className='name-edit-input' type="text" name='lastname' placeholder='Enter your last name' />
            <button className="confirm-button">Confirm</button>
          </form>
          : <button className="edit-button" onClick={handleClick}>Edit Name</button>
        }
      </div>

      <h2 className="sr-only">Accounts</h2>

      <Account accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountDescription="Available Balance" />
      <Account accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountDescription="Available Balance" />
      <Account accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountDescription="Current Balance" />
    </main>
  );
}

export default User;