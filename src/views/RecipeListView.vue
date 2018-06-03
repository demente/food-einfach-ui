<template>
<div class="container">
	<div class="row">
		<h1>Recipes</h1>
	</div>
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
import RecipeRow from '../components/RecipeRow'
export default {
	 name: 'RecipeListView',
	 components: {RecipeRow},
	 data(){
		 return {
			 recipeFilter: '',
			 recipeList: [{id: 1, name: 'Recipe 1'}, {id:2, name: 'Meatballs'}]
		 }
	 },
	 computed: {
		 filteredRecipeList() {
			 var filterValue = this.recipeFilter.toLowerCase()
			 return this.recipeList.filter(function(recipe) {
					return recipe.name.toLowerCase().includes(filterValue);
				});
		 }
	 }

}
</script>
