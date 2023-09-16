<template>
  <main-content>
    <Search v-model="searchKey" @changeInput="searchMeals"/>
    <meal-cards :meals="meals"/>
  </main-content>
</template>

<script setup>
import Search from "@/components/forms/search/Search.vue";
import {computed, onMounted, ref} from "vue";
import MealCards from "@/components/meal-cards/MealCards.vue";
import MainContent from "@/components/layouts/main-content/mainContent.vue";
import store from "@/store";

const searchKey = ref('')

const meals = computed(() => store.state.mealBySearch)

function searchMeals() {
  if (searchKey.value) {
    store.dispatch('mealBySearchKey', searchKey.value)
  } else {
    store.commit('setMealBySearchKey', [])
  }
}

onMounted(() => {
  searchMeals()
})

</script>
