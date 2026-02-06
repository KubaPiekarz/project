<template>
  <div class="flex gap-2 flex-wrap">
    <label class="text-sm font-medium text-gray-700">Sort by:</label>
    <button
      v-for="option in sortOptions"
      :key="option.value"
      @click="$emit('update:modelValue', option.value)"
      :class="[
        'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
        modelValue === option.value
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  sortOptions: {
    type: Array,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>
