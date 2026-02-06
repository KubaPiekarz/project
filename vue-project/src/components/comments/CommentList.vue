<template>
  <div class="flex flex-col min-h-screen p-4 gap-4">
    <Search class="mb-4 self-start" v-model:searchTerm="searchTerm" />

    <div v-if="loading" class="xl:grid grid-cols-5 gap-4 mt-4">
      <CommentItemSkeleton v-for="n in 15" />
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="filteredComments.length === 0">Brak komentarzy pasujących do wyszukiwania.</div>
    <div v-else class="xl:grid grid-cols-5 gap-4 mt-4">
      <CommentItem v-for="comment in filteredComments" :key="comment.id" :comment="comment" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue'
import { useCommentsStore } from '@/stores/comments'
import CommentItem from './CommentItem.vue'
import CommentItemSkeleton from './CommentItemSkeleton.vue'
import Search from '@/components/common/Search.vue'
import { useFilterComments } from '@/composables/useFilterComments'

const commentsStore = useCommentsStore()
const { comments, loading, error } = toRefs(commentsStore)
const searchTerm = ref('')

const filteredComments = useFilterComments(comments, searchTerm)

onMounted(() => {
  commentsStore.fetchComments()
})
</script>

<style scoped></style>
