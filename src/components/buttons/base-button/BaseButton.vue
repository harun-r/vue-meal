<template>
  <button v-if="content">
    {{ content }}
  </button>
  <button v-else>
    <slot>click me dd</slot>
  </button>
</template>
<script setup>
defineProps({
  content: {
    type: String
  }
})
</script>
