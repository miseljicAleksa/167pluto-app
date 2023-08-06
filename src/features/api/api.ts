import axios from "axios"

const AXIOS = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_RANDOM_USERS_BASE_URL
      : import.meta.env.VITE_RANDOM_USERS_BASE_URL,
  withCredentials: false,
})

export default AXIOS
