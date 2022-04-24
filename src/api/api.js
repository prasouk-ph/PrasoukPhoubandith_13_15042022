import axios from "axios";
import { getItem } from "../services/LocaleStorage";

axios.interceptors.request.use(request => {
  const token = getItem("token")
  if (token !== null) {
    request.headers['Authorization'] = `Bearer ${token}`
  }

  return request;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
});


export function login(credentials) {
  const loginURL = 'http://localhost:3001/api/v1/user/login'
  return axios.post(loginURL, credentials)
}


export function getUserData() {
  const userDataURL = 'http://localhost:3001/api/v1/user/profile'
  const body = {};

  return axios.post(userDataURL, body)
}


export function changeUserData(userFirstName, userLastName) {
  const userDataURL = 'http://localhost:3001/api/v1/user/profile'
  const body = {
    "firstName": userFirstName,
    "lastName": userLastName
  }
  
  return axios.put(userDataURL, body)
}
