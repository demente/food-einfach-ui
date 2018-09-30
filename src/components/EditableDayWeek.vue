<template>
    
		<div class="row  mb-2">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">{{dayOfWeek}}</h5>
					</div>
				</div>
				
                <MealEditableRow v-for="recipe in recipesForDay(dayOfWeek)" :key="recipe.id" :meal="recipe" @recipeRemoved="removeRecipe"/>

				<div class="row">
					<div class="col">
                        <a class="btn btn-primary mb-1" @click="addRecipe">Add recipe</a>
						</div>
				</div>
				
			</div>
		</div>
</template>

<script>
import MealEditableRow from "../components/MealEditableRow";
export default {
  name: "EditableDayWeek",
  props: ["dayOfWeek", "recipes"],
  components: { MealEditableRow },
  methods: {
    recipesForDay(day) {
      return this.recipes.filter(item => item.dayOfWeek === day);
    },
    addRecipe() {
      this.recipes.push({ recipe: {}, dayOfWeek: this.dayOfWeek });
    },
    removeRecipe(recipe) {
      this.$emit("recipeRemoved", recipe);
    }
  }
};
</script>

