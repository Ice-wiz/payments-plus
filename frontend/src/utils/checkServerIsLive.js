import axios from "axios";

import { API_URL } from "./constants";
console.log(API_URL)

export const checkServerIsLive = async (setServerLive) => {
  try {
    console.log("hi")
    const response = await axios.get(API_URL);
    console.log("hi2")
    console.log(response)
    const { live } = await response?.data;
    console.log(live)
    setServerLive(live);
    localStorage.setItem("msg", false);
  } catch (error) {
    console.error(error);
  }
};
