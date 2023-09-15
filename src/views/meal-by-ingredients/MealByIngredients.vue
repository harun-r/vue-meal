<template>
  <div class="p-8">
    <Ingredients :ingredients="ingredients"/>


  </div>
</template>
<script setup>
import Ingredients from "@/components/Ingredients/Ingredients.vue";
import {ref} from "vue";

const ingredients = ref([])
</script>
