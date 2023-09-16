<template>
  <MainContent>
    <Letters/>
    <meal-cards :meals="meals"/>
  </MainContent>
</template>
<script setup>
import Letters from "@/components/letters/Letters.vue";
import MainContent from "@/components/layouts/main-content/mainContent.vue";
import MealCards from "@/components/meal-cards/MealCards.vue";
import {computed, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import store from "@/store";

const route = useRoute();

// get meal from store state
const meals = computed(() => store.state.mealByLetter);

// Sent meal search action
function getMealByLetter() {
  store.dispatch('mealByLetter', route.params.letter)
}

watch(route, () => {
  getMealByLetter()
})
onMounted(() => {
  getMealByLetter()
})
</script>
