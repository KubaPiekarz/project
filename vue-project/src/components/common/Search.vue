<template>
  <div>
    <input
      :value="searchTerm"
      @input="$emit('update:searchTerm', $event.target.value)"
      placeholder="Wyszukaj komentarze"
      class="p-1 m-4 border border-gray-300 rounded-lg bg-gray-100 mt-4"
    />
  </div>
</template>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
      default: '',
    },
  },
}
</script>
