<template>
  <div class="search-box">
    <input type="text" :value="value" @input="inputValue" class="rounded border-2 border-gray-200 h-30 w-full"
           placeholder="Search for meals">
  </div>
</template>
<script setup>
defineProps({
  value: String
})
const emit = defineEmits(['update:value'])
const inputValue = (e) => {
  emit('update:value', e.target.value)
}

</script>
<style scoped>

</style>