import axios from 'axios'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const commentsApi = {
  async fetchComments() {
    const response = await axios.get(`${API_BASE_URL}/comments`)
    return response.data
  },
}
