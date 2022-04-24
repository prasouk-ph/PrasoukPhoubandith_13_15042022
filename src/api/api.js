import axios from "axios";
import { getItem } from "../services/LocaleStorage";

// axios.interceptors.request.use(function (config) {
//   config.headers['Bearer Token'] = getItem("token")
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


export function login(credentials) {
  const loginURL = 'http://localhost:3001/api/v1/user/login'
  
  return axios.post(loginURL, credentials)
}


export function getUserData() {
  const userDataURL = 'http://localhost:3001/api/v1/user/profile'
  const token = getItem("token")
  const body = {};
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  
  return axios.post(userDataURL, body, { headers: headers })
}


export function changeUserData(userFirstName, userLastName) {
  const userDataURL = 'http://localhost:3001/api/v1/user/profile'
  const token = getItem("token")
  const body = {
    "firstName": userFirstName,
    "lastName": userLastName
  }
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  
  return axios.put(userDataURL, body, { headers: headers })
}
