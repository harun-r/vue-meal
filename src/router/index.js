import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealList from "@/views/MealList/MealList.vue";
import MealBySearch from "@/views/meal-by-search/MealBySearch.vue";
import MealByLetters from "@/views/meal-by-letters/MealByLetters.vue";
import MealByIngredients from "@/views/meal-by-ingredients/MealByIngredients.vue";
import IngredientList from "@/views/meal-by-ingredients/ingredient-lists/IngredientList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/letter/:letter',
      name: 'mealList',
      component: MealList
    },
    {
      path: '/meal-by-search',
      name: 'mealBySearch',
      component: MealBySearch
    },
      {
      path: '/meal-by-letter/:letter?',
      name: 'mealByLetters',
      component: MealByLetters
    },
    {
      path: '/meal-by-ingredients',
      name: 'ingredientList',
      component: IngredientList
    },
    {
      path: '/meal-by-ingredients/:ingredient?',
      name: 'mealByIngredients',
      component: MealByIngredients
    }
  ]
})

export default router
