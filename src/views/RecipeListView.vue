<template>
<div class="container rounded  pt-2 pb-2" style="background-color:white;">
    <div class="row">
        <div class="col">
            <router-link class="btn btn-primary mb-1" :to="{name:'RecipeNewView'}">New</router-link>
        </div>
    </div>
    
    <table>
        <thead>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Type</th>
        </thead>
        <tbody>
            <tr v-for="recipe in recipeList" v-bind:key="recipe.id">
              <td><a class="fa fa-trash" aria-hidden="true" @click="deleteRecipe(recipe.id)"></a></td>
                <td><router-link class="fa fa-pencil" aria-hidden="true" :to="{name:'RecipeEditableView', params: {id: recipe.id}}"></router-link></td>
                   <td><router-link :to="{name:'RecipeView', params: {id: recipe.id}}">{{recipe.name}}</router-link></td>
                <td>{{concat(recipe.type)}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "RecipeListView",
  data() {
    return {
      recipeList: []
    };
  },
  created() {
    this.updateRecipeList();
  },
  methods: {
    updateRecipeList() {
      axios.get("http://localhost:8080/recipeinfo/").then(response => {
        this.recipeList = response.data;
      });
    },
    concat(type) {
      if (type) {
        return type.join(", ");
      }
    },
    deleteRecipe(id) {
      axios
        .delete("http://localhost:8080/recipes/" + id)
        .then(() => this.updateRecipeList());
    }
  }
};
</script>

