import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
   /*  withCredentials: true,
    credentials: 'same-origin', */
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     /*  'Access-Control-Allow-Origin': '*' */
  }

  })
}