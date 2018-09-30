<template>
    
		<!-- ingredients row -->
		<div class="row  mb-2 ">
			<div class="container ">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">{{dayOfWeek}}</h5>
					</div>
				</div>
		
				<div class="row" v-for="(meal,i) in recipeByMealType('BREAKFAST')" :key="meal.id">
					<div class="col" v-if="i===0">Breakfast</div>
                    <div class="col" v-else></div>
                    <div class="col"> <router-link  :to="{name:'RecipeView', params: {id: meal.recipe.id}}">{{meal.recipe.name}}</router-link></div>
				</div>
				
				<div class="row" v-for="(meal,i) in recipeByMealType('LUNCH')" :key="meal.id">
					<div class="col" v-if="i===0">Lunch</div>
                    <div class="col" v-else></div>
					<div class="col"> <router-link  :to="{name:'RecipeView', params: {id: meal.recipe.id}}">{{meal.recipe.name}}</router-link></div>
				</div>
				
				<div class="row" v-for="(meal,i) in recipeByMealType('DINNER')" :key="meal.id">
					<div class="col" v-if="i===0">Dinner</div>
                    <div class="col" v-else></div>
		<div class="col"> <router-link  :to="{name:'RecipeView', params: {id: meal.recipe.id}}">{{meal.recipe.name}}</router-link></div>
				</div>
			</div>
		</div>
		<!-- end ingredients row -->
</template>

<script>
export default {
  name: "DayWeek",
  props: ["dayOfWeek", "recipes"],
  methods: {
    recipeByMealType(mealType) {
      return this.recipes.filter(item => item.mealType === mealType);
    }
  }
};
</script>
