<template>
  <main-content>
    <div class="search-box mb-4">
      <input type="text"
             v-model="keyword"
             class="rounded border-2 border-gray-200 h-30 w-full"
             placeholder="Search for ingredient">
    </div>
    <Ingredients :ingredients="computedIngredient" @addIngredient="commitIngredient"/>
  </main-content>
</template>
<script setup>

import MainContent from "@/components/layouts/main-content/mainContent.vue";
import Ingredients from "@/components/Ingredients/Ingredients.vue";
import {computed, onMounted, ref} from "vue";
import axiosClient from "@/axiosClient";
import store from "@/store";
import {useRoute} from "vue-router";

const keyword = ref('')
const ingredients = ref([])
const route = useRoute()
const computedIngredient = computed(() => {
  if (!computedIngredient) return ingredients;
  return ingredients.value.filter((i) =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})
function commitIngredient() {
  store.commit('setIngredient', route.params.ingredient)
}
onMounted(() => {
  // store.dispatch('getAllIngredient')

  axiosClient.get(`/list.php?i=list`)
      .then(res=>{
        console.log('res', res.data.meals)
        ingredients.value = res.data.meals
      })
})
</script>
