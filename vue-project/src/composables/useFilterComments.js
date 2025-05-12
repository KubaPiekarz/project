import { computed } from 'vue'

export function useFilterComments(comments, searchTerm) {
  return computed(() => {
    return comments.value.filter((comment) => {
      const term = searchTerm.value.toLowerCase()
      return comment.name.toLowerCase().includes(term) || comment.email.toLowerCase().includes(term)
    })
  })
}
