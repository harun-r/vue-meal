<template>
  <div class="search-box">
    <input type="text"
           :value="modelValue"
           @change="changeInputs"
           class="rounded border-2 border-gray-200 h-30 w-full"
           placeholder="Search for meals">
  </div>
</template>
<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'changeInput'])

const changeInputs = (e) => {
  emit('update:modelValue', e.target.value)
  emit('changeInput', e.target.value)
}

</script>
