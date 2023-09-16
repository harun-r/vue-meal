<template>
  <main-content>
    <pre>{{ingredient}}</pre>

    <meal-cards :meals="meals"/>
  </main-content>
</template>
<script setup>
import MainContent from "@/components/layouts/main-content/mainContent.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import store from "@/store";
import MealCards from "@/components/meal-cards/MealCards.vue";
const route = useRoute()
const ingredient = route.params.ingredient

const meals = store.state.mealByIngredient

onMounted(()=>{
  store.dispatch('mealByIngredient', route.params.ingredient)
})

</script>
