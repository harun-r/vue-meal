<template>
    <div class="letter-wrap flex gap-2 justify-center mt-3">
      <router-link :class="'uppercase hover:bg-purple-300 px-2'" :to="{name: 'mealByLetters', params: {letter}}" v-for="letter in letters" :key="letter">
        {{letter}}
      </router-link>
    </div>
</template>
<script setup>
  const letters = "abcdefghijklmnopqrstuvwxyz".split('')
</script>
