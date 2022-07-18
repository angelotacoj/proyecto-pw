import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const useBaseService = () => {
  return ({ method, data, url, withAuthentication = true }) => {
    return axios({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      method,
      data,
      url
    })
  }
}

export default useBaseService
