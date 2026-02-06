<template>
  <div class="flex flex-col min-h-screen p-4 gap-4">
    <div class="flex flex-col gap-3">
      <Search v-model:searchTerm="searchTerm" />
      <SortButtons v-model="sortBy" :sortOptions="SORT_OPTIONS" />
    </div>

    <div v-if="loading" class="xl:grid grid-cols-5 gap-4 mt-4">
      <CommentItemSkeleton v-for="n in 15" />
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="filteredAndSortedComments.length === 0">
      Brak komentarzy pasujących do wyszukiwania.
    </div>
    <div v-else class="xl:grid grid-cols-5 gap-4 mt-4">
      <CommentItem
        v-for="comment in filteredAndSortedComments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue'
import { useCommentsStore } from '@/stores/comments'
import { SORT_OPTIONS } from '@/constants/sortOptions'
import CommentItem from './CommentItem.vue'
import CommentItemSkeleton from './CommentItemSkeleton.vue'
import Search from '@/components/common/Search.vue'
import SortButtons from '@/components/common/SortButtons.vue'
import { useFilterComments } from '@/composables/useFilterComments'
import { useSortComments } from '@/composables/useSortComments'

const commentsStore = useCommentsStore()
const { comments, loading, error } = toRefs(commentsStore)
const searchTerm = ref('')
const sortBy = ref(SORT_OPTIONS[0].value)

const filteredComments = useFilterComments(comments, searchTerm)
const filteredAndSortedComments = useSortComments(filteredComments, sortBy)

onMounted(() => {
  commentsStore.fetchComments()
})
</script>

<style scoped></style>
