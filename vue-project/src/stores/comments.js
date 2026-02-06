import { defineStore } from 'pinia'
import axios from 'axios'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: [],
    error: null,
    loading: false,
  }),
  actions: {
    async fetchComments() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
        this.comments = res.data
      } catch (e) {
        this.error = 'Błąd podczas pobierania komentarzy'
      } finally {
        this.loading = false
      }
    },
  },
})
