<template>
  <div class="ingredient-search grid grid-cols-4 gap-3">
      <router-link
          class="border bg-white p-5  shadow rounded"
          v-for="ingredient in ingredients"
          :key="ingredient"
          @click="addIngredient" :to="{name: 'mealByIngredients', params:{ingredient: ingredient.strIngredient}}">
        <h3 class="text-2xl font-medium">
          {{ ingredient.strIngredient }}
        </h3>
      </router-link>
  </div>
</template>
<script setup>
defineProps({
  ingredients: {
    type: Array,
    default: []
  }
})
const emit = defineEmits(['addIngredient'])
const addIngredient = () => {
  emit('addIngredient')
}

</script>
