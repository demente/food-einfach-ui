<template>
<div style="position: fixed; z-index: 9998;" v-if="visible">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Select recipe</h5>
        <button type="button" class="close" aria-label="Close" @click="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <input class="input" type="text" v-model="name" placeholder="Enter recipe name"  debounce="500" @input="searchRecipe"/>
            <ul class="list-group list-group-flush">
            <router-link class="list-group-item" :to="{name:'RecipeEditableView', params: {id: recipe.id, food: food}}"  v-for="recipe in recipeList" :key="recipe.id">{{recipe.name}}</router-link>
            </ul>
      </div>
      <div class="modal-footer">
        <router-link  class="btn btn-primary" :to="{name:'RecipeNewView', params: {food: food}}" >New recipe</router-link>
        <button type="button" class="btn btn-secondary"  @click="close">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "RecipeModal",
  props: ["visible", "food"],
  data() {
    return {
      name: "",
      recipeList: []
    };
  },
  methods: {
    close() {
      this.name = "";
      this.recipeList = [];
      this.$emit("closed");
    },
    searchRecipe() {
      if (this.name.length > 2) {
        axios
          .get("http://localhost:8080/recipes?name=" + this.name)
          .then(resp => (this.recipeList = resp.data));
      }
    }
  }
};
</script>

<style>
</style>
