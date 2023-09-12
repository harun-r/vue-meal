import axiosClient from "@/axiosClient";

export function mealBySearchKey({commit}, searchKey) {
    axiosClient.get(`/search.php?s=${searchKey}`)
        .then(({data}) => {
            commit('setMealBySearchKey', data)
        })
}