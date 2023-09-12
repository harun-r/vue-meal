<template>
  <div class="bg-gray-100 min-h-screen">
    <Header/>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router'
import Header from "@/components/Header/Header.vue";
</script>


<style scoped>

</style>
