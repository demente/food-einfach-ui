<template>
<div class="container">
	<div class="row">&nbsp;</div>

	<div class="row">
		<div class="col">
			<h1>Recipes</h1>
		</div>
		<div class="col text-right">
			<router-link type="button" class="btn btn-primary" :to="{name:'RecipeNewView'}">New</router-link>
		</div>
	</div>


	<div class="row">&nbsp;</div>

	<div class="row">
		<input class="form-control" placeholder="Filter..."
			v-model="recipeFilter" />
	</div>
	<div class="row">&nbsp;</div>
	<div class="row">
		<div class="col font-weight-bold ">Name</div>
	</div>
	<RecipeRow v-for="recipe in filteredRecipeList" :recipe="recipe"
		:key="recipe.id" />
</div>
</template>

<script>
import axios from "axios";
import RecipeRow from "../components/RecipeRow";

export default {
  name: "RecipeListView",
  components: { RecipeRow },
  data() {
    return {
      recipeFilter: "",
      recipeList: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/recipes/")
      .then(response => this.updateRecipeList(response));
  },
  methods: {
    updateRecipeList(response) {
      this.recipeList = response.data;
    }
  },
  computed: {
    filteredRecipeList() {
      var filterValue = this.recipeFilter.toLowerCase();
      return this.recipeList.filter(function(recipe) {
        return recipe.name.toLowerCase().includes(filterValue);
      });
    }
  }
};
</script>
