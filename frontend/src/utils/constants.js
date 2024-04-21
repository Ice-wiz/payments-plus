const env = import.meta.env.VITE_ENV || "LOCAL";
const localApiUrl = import.meta.env.VITE_LOCAL_API_URL;

console.log(localApiUrl,"hi")

export const API_URL = "http://localhost:3000/api/";
console.log(API_URL)
export const guestCredentials = {
  username: "jhon doe",
  password: "password123",
};
export const appLink ="http://localhost:5173/";
