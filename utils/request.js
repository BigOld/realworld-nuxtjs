import axios from "axios";


const request = axios.create({
  baseURL: 'https://conduit.productionready.io/'
})

// 请求拦截

// 响应拦截

export default request