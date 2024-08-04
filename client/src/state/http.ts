import Axios from "axios"

const AxiosClient = Axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
})

export default AxiosClient
