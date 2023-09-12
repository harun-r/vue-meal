<template>
  <div class="p-8">
    <input v-model="searchKey" @change="searchHandler" type="text" class="rounded border-2 border-gray-200 h-30 w-full" placeholder="Search for meals">

    <div>
      <div>
        <pre>
          {{meals?.meals}}
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
    import store from "@/store";

    const searchKey = ref('');

    const meals = computed(() => store.state.mealBySearch)

    const searchHandler = () =>{
      store.dispatch('mealBySearchKey', searchKey.value)
    }
</script>



<style scoped>

</style>