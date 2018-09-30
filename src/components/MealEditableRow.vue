<template>
    <div class="row align-items-top">
					<div class="col">
						<div class="input-group mb-3 autocomplete">
							<input type="text" class="form-control" placeholder="Enter recipe name" v-model="meal.recipe.name"  debounce="500" @input="searchRecipe">
							<div class="autocomplete-items">
								<div v-for="recipe in recipeList" v-bind:key="recipe.id" @click="selectRecipe(recipe)">
									{{ recipe.name }}
								</div>
  						</div>

						</div>
					</div>
					<div class="col">
						<div class="input-group mb-3">						  
						  <select class="form-control" v-model="meal.mealType">
							<option value="BREAKFAST">Breakfast</option>
							<option value="LUNCH">Lunch</option>
							<option value="DINNER">Dinner</option>
							
						  </select>
						</div>
					</div>
					<div class="col-sm-2 ">
				<a class="btn btn-primary mb-1 " @click="removeRecipe(meal)">X</a>
					</div>
				</div>
				
</template>

<script>
import axios from "axios";
export default {
  name: "MealEditableRow",
  props: ["meal"],
  data() {
    return {
      recipeList: []
    };
  },
  methods: {
    searchRecipe() {
      if (this.meal.recipe.name.length > 2) {
        axios
          .get("http://localhost:8080/recipes?name=" + this.meal.recipe.name)
          .then(resp => (this.recipeList = resp.data));
      }
    },
    selectRecipe(recipe) {
      this.meal.recipe = recipe;
      this.recipeList = [];
    },
    removeRecipe(meal) {
      this.$emit("recipeRemoved", meal);
    }
  }
};
</script>



<style>
.autocomplete {
  /*the container must be positioned relative:*/
  position: relative;
  /*display: inline-block;*/
}
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  word-wrap: break-word;
}
.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}
.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>