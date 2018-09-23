<template>
<div class="container rounded  pt-2 pb-2" style="background-color:white;">
    <table>
        <thead>
            <th></th>
            <th>Name</th>
            <th>Type</th>
        </thead>
        <tbody>
            <tr v-for="recipe in recipeList" v-bind:key="recipe.id">
                <td><router-link class="fa fa-pencil" aria-hidden="true" :to="{name:'RecipeView', params: {id: recipe.id}}"></router-link></td>
                <td>{{recipe.name}}</td>
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
    axios.get("http://localhost:8080/recipeinfo/").then(response => {
      this.recipeList = response.data;
    });
  },
  methods: {
    concat(type) {
      if (type) {
        return type.join(", ");
      }
    }
  }
};
</script>

