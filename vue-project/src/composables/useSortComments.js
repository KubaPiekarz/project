import { computed } from 'vue'

export function useSortComments(comments, sortBy) {
  return computed(() => {
    if (!comments.value.length) return []

    const sorted = [...comments.value]

    switch (sortBy.value) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'email':
        return sorted.sort((a, b) => a.email.localeCompare(b.email))
      case 'date':
        return sorted.sort((a, b) => b.id - a.id)
      default:
        return sorted
    }
  })
}
