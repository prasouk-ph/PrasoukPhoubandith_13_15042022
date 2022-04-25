import { createStore } from "redux";
import { getItem } from "../services/LocaleStorage";
import produce from "immer";


function checkLoginStatus() {
  const token = getItem("token")

  if (token) {
    return true
  }
}

const initialState = {
  userFirstName: "",
  userLastName: "",
  isLogged: checkLoginStatus()
}

// eslint-disable-next-line no-unused-vars
const setUserFirstNameAction = (firstName) => ({
  type: "setUserFirstName",
  payload: {userFirstName: firstName}
});

// eslint-disable-next-line no-unused-vars
const setUserLastNameAction = (lastName) => ({
  type: "setUserLastName",
  payload: {userLastName: lastName}
});

// eslint-disable-next-line no-unused-vars
const logOutAction = () => ({
  type: "logOut"
});


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setUserFirstNameAction': {
      return produce(state, (draft) => {
        draft.userFirstName = action.payload; // the property that will change and the new value
      });
    }
    case 'setUserLastNameAction': {
      return produce(state, (draft) => {
        draft.userLastName = action.payload;
      });
    }
    case 'logIn': {
      return produce(state, (draft) => {
        draft.isLogged = true;
      });
    }
    case 'logOut': {
      return produce(state, (draft) => {
        draft.isLogged = false;
      });
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't care about this specific action, return the existing state unchanged
      return state
  }
}

export const store = createStore(reducer);