<template>
  <main-content>
    <Search :value="searchKey"/>
    <meal-cards :meals="meals"/>
  </main-content>
</template>

<script setup>
import Search from "@/components/forms/search/Search.vue";
import {onMounted, ref} from "vue";
import axiosClient from "@/axiosClient";
import MealCards from "@/components/meal-cards/MealCards.vue";
import MainContent from "@/components/layouts/main-content/mainContent.vue";

const searchKey = ref('')

const meals = ref([])
onMounted(() => {
  axiosClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKey.value}`)
      .then(res => {
        console.log(res)
        meals.value = res.data.meals
      })
      .catch(err => {
        console.log(err)
      })
})

</script>
