<template>
  <div class="ingredient-search p-8">
    <div class="border" v-for="ingredient in ingredients" :key="ingredient">
      <h3>{{ ingredient }}</h3>
    </div>
  </div>
</template>
<script setup>
defineProps({
  ingredients:{
    type: Array,
    default: []
  }
})

</script>
