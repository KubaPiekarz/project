<template>
  <div
    class="max-h-80 xl:min-w-[282px] p-4 border border-gray-300 rounded-lg bg-gray-100 w-4xs overflow-auto"
  >
    <p class="text-xl">{{ name }}</p>
    <small>{{ email }}</small>
    <p>{{ body }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
})
const { name, email, body } = props.comment
</script>

<style scoped></style>
