import axiosClient from "@/axiosClient";

export function mealBySearchKey({commit}, searchKey) {
    axiosClient.get(`/search.php?s=${searchKey}`)
        .then(({data}) => {
            commit('setMealBySearchKey', data.meals);
            console.log(data, 'data')
        })
}

export function mealByLetter({commit}, payload) {
    axiosClient.get(`/search.php?f=${payload}`)
        .then(({data}) =>{
            commit('setMealByLetter', data.meals);
            console.log('data', data.meals)
        })
}
export function mealByIngredient({commit}, payload){
    axiosClient.get(`/filter.php?i=${payload}`)
        .then(({data}) =>{
            commit('setMealByIngredient', data.meals)
            console.log('setMealByIngredient', data.meals)
        })
}