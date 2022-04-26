import { configureStore } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'
import { getItem } from "../services/LocaleStorage";


function checkLoginStatus() {
  const token = getItem("token")

  if (token) {
    return true
  }
}

const userInitialState = {
  user: {    
    userFirstName: "",
    userLastName: "",
  }
}

const loginInitialState = {
  login: {
    isLogged: checkLoginStatus()
  }
}

export const setUserFirstName = createAction(
  'setUserFirstName',
  (firstName) => ({
    payload: { userFirstName: firstName }, // should be an object
  })
);

export const setUserLastName = createAction(
  'setUserLastName',
  (lastName) => ({
      payload: { userLastName: lastName },
  })
);

export const logOut = createAction('logOut');

export const logIn = createAction('logIn');

const userReducer = createReducer(userInitialState.user, (builder) =>
  builder
    .addCase(setUserFirstName, (draft, action) => {
      draft.userFirstName = action.payload.userFirstName
      return
    })
    .addCase(setUserLastName, (draft, action) => {
      draft.userLastName = action.payload.userLastName
      return
    })
)

const loginReducer = createReducer(loginInitialState.login, (builder) =>
  builder
    .addCase(logIn, (draft) => {
      draft.isLogged = true
      return
    })
    .addCase(logOut, (draft) => {
      draft.isLogged = false
      return
    })
)

export const store = configureStore({
  reducer : {
      user: userReducer,
      login: loginReducer,
  },
});
