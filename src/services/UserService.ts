import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export { apiClient }

export default {
  getUsers() {
    return apiClient.get('/users')
  },
  getUser(id: number) {
    return apiClient.get('/users/' + id)
  },
}
