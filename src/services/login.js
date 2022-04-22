import axios from "axios";
import { getItem } from "./LocaleStorage";

export function login(credentials) {
  const loginURL = 'http://localhost:3001/api/v1/user/login'
  
  return axios.post(loginURL, credentials)
}

export function checkLoginStatus() {
  const token = getItem("token")

  if (token) {
    return true
  }
}