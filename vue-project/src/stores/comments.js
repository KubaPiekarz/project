import { defineStore } from 'pinia'
import { commentsApi } from '@/services/commentsApi'

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
        this.comments = await commentsApi.fetchComments()
      } catch (e) {
        this.error = 'Błąd podczas pobierania komentarzy'
      } finally {
        this.loading = false
      }
    },
  },
})
