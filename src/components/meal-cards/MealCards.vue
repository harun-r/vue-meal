<template>
  <div class="search-cards grid grid-cols-4 gap-3 mt-4">
    <div class="search-card  shadow flex flex-col bg-white rounded h-100" v-for="meal in meals" :key="meal.idMeal">
      <div class="cover w-full h-40">
        <router-link :to="{name:'', params: {}}">
          <img class="w-full h-full object-cover" :src="meal.strMealThumb" alt="">
        </router-link>
      </div>
      <div class="content p-3">
        <h3 class="font-medium text-base">{{ meal.strMeal }}</h3>
        <base-button :content="'dfd'"/>
      </div>
    </div>
  </div>
</template>
<script setup>
  import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
  defineProps({
    meals:{
      type: Array,
      default: []
    }
  })
</script>


<style scoped>

</style>