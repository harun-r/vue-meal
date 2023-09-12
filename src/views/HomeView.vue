<template>
  <div class="flex flex-col justify-center p-8">
    <input type="text" class="rounded border-2 border-gray-200 h-30 w-full" placeholder="Search for meals">
    <div class="flex gap-2 justify-center mt-3">
      <router-link :class="'uppercase'" :to="{name:'mealList', params:{letter}}" v-for="letter in letters"
                   :key="letter">
        {{ letter }}
      </router-link>
    </div>
    <div>
<!--      <div v-for="meal in meals" :key="meal?.idIngredient">-->
<!--        <h3>{{meal.strIngredient}}</h3>-->
<!--      </div>-->
    </div>

  </div>
</template>


<script setup>

import {onMounted, ref} from "vue";
import axiosClient from "@/axiosClient";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const meals = ref([])

onMounted(async () => {
 const res = await axiosClient.get('/list.php?i=list')
  console.log(res)
  meals.value = res.data.meals

})
</script>

