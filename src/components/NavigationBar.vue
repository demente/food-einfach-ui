<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
	<a class="navbar-brand" href="#">FoodEinfach</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
		aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
			<router-link class="nav-item nav-link" :to="{name:'FoodListView'}">Food</router-link>
			<router-link class="nav-item nav-link" :to="{name:'RecipeListView'}">Recipes</router-link>
			<router-link class="nav-item nav-link" :to="{name:'MealPlanListView'}">Meal Planner</router-link>
			</div>
	</div>
</nav>
</template>

<script>
export default {
  name: "NavigationBar"
};
</script>