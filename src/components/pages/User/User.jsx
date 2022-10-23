import Account from './Account/Account';
import './User.css';
import { useEffect } from 'react';
import { getUserData } from '../../../api/api'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { accounts } from '../../../data/accounts'
import { setUserFirstName, setUserLastName } from '../../../store/store'


function User() {
  // const [editMode, setEditMode] = useState(false);
  
  const userFirstName = useSelector((state) => state.user.userFirstName);
  const userLastName = useSelector((state) => state.user.userLastName);
  const dispatch = useDispatch()


  // function handleClick() {
  //   setEditMode(true)
  // }


  // async function handleSubmit(event) {
  //   const { firstname, lastname } = event.target

  //   event.preventDefault()

  //   if (firstname.value !== '') {
  //     try {
  //       await changeUserData(firstname.value, lastname.value)
  //       dispatch(setUserFirstName(firstname.value))
  //       dispatch(setUserLastName(lastname.value))
  //     } catch ({response}) {
  //       console.log(response)
  //     }
  //   }

  //   setEditMode(false)
  // }


  // function handleCancel() {
  //   setEditMode(false)
  // }


  async function loadData() {
    try {
      const response = await getUserData()
      const { firstName, lastName } = response.data.body
      dispatch(setUserFirstName(firstName))
      dispatch(setUserLastName(lastName))
    } catch ({response}) {
      console.log(response)
    }
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFirstName, userLastName])

  return (
    <main className="user-main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{`${userFirstName} ${userLastName}`} !</h1>

        {/* {editMode ?
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
        } */}
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