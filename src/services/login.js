import axios from "axios";
import { getItem } from "./LocaleStorage";

export function login(credentials) {
  const loginURL = 'http://localhost:3001/api/v1/user/login'
  
  return axios.post(loginURL, credentials)
}

export async function getUserData() {
  const userDataURL = 'http://localhost:3001/api/v1/user/profile'
  const token = getItem("token")
  const body = {};
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  
  const response = await axios.post(userDataURL, body, { headers: headers })
  return response
}

export function checkLoginStatus() {
  const token = getItem("token")

  if (token) {
    return true
  }
}