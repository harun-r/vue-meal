<template>
  <header class="bg-white h-16 px-3 shadow-md flex items-center justify-between">
    <router-link to="/">The Meals</router-link>

    <nav class="flex items-center">
      <router-link class="h-16 p-3 flex items-center hover:bg-purple-100" :to="{name: 'mealBySearch'}">Search Meals</router-link>
      <router-link class="h-16 p-3 flex items-center hover:bg-purple-100" :to="{name: 'mealByLetters'}">Meals By Letter</router-link>
      <router-link class="h-16 p-3 flex items-center hover:bg-purple-100" :to="{name: 'ingredientList'}">Meals By Ingredients</router-link>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>