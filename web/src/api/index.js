import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_SERVER
})


request.interceptors.request.use(config => {
  return config
})

request.interceptors.response.use(res => {
  return res.data
})


export default request
