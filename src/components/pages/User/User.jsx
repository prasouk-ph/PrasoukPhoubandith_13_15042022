import Account from './Account/Account';
import './User.css';
import { LoginStateContext } from '../../../App';
import { AccountsDataContext } from '../../../App';
import { useContext, useState, useEffect } from 'react';
import { getUserData, changeUserData } from '../../../api/api'

function User() {
  const { userFirstName, setUserFirstName, userLastName, setUserLastName } = useContext(LoginStateContext);
  const accounts = useContext(AccountsDataContext);
  const [editMode, setEditMode] = useState(false);


  function handleClick() {
    setEditMode(true)
  }


  async function handleSubmit(event) {
    const { firstname, lastname } = event.target

    event.preventDefault()

    if (firstname.value !== '') {
      try {
        await changeUserData(firstname.value, lastname.value)
        setUserFirstName(firstname.value)
        setUserLastName(lastname.value)
      } catch ({response}) {
        console.log(response)
      }
    }

    setEditMode(false)
  }


  function handleCancel() {
    setEditMode(false)
  }


  async function loadData() {
    try {
      const response = await getUserData()
      const { firstName, lastName } = response.data.body
      setUserFirstName(firstName)
      setUserLastName(lastName)
    } catch ({response}) {
      console.log(response)
    }
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFirstName])

  return (
    <main className="user-main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{`${userFirstName} ${userLastName}`} !</h1>

        {editMode ?
          <form className='name-edit' onSubmit={handleSubmit}>
            <div className="input-container">
              <input className='name-edit-input' type="text" name='firstname' placeholder={userFirstName} />
              <input className='name-edit-input' type="text" name='lastname' placeholder={userLastName} />
            </div>

            <div className="button-container">
              <button className="name-edit-button" type='submit'>Save</button>
              <button className="name-edit-button" type='reset' onClick={handleCancel}>Cancel</button>
            </div>
          </form>
          : <button className="edit-button" onClick={handleClick}>Edit Name</button>
        }
      </div>

      <h2 className="sr-only">Accounts</h2>
      
      <div className="accounts-container">
        {accounts.map(account => 
          <Account key={`account-${account.id}`} accountId={account.id} accountTitle={account.title} accountAmount={account.amount} accountDescription={account.description} />
        )}
      </div>
    </main>
  );
}

export default User;