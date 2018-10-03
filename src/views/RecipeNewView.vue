<template>
    <div class="container rounded  pt-2 pb-2" style="background-color:white;">
<!--breadcrumb-->
<div class="row ">
  <div class="col">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a href="#">Recipes</a></li>
		<li class="breadcrumb-item active">{{recipe.name}} (new)</li>
	</ol>
  </div>
</div>
<!--end of breadcrumb -->


<!-- header, tags and picture row -->
<div class="row">
<!-- column header and tags-->
	<div class="col">
		<div class="row">
			<div class="col">
				<div class="form-group row">
					<label class="col-sm-2 col-form-label">Name</label>
					<div class="col-sm-10">
						<input type="text" class="form-control"  placeholder="Enter recipe name" v-model="recipe.name">
					</div>
				</div>
			</div>
		</div>
		
		<div class="row mb-2">
			<div class="col">
				<div class="form-group row">
					<label class="col-sm-2 col-form-label">Type</label>
					<div class="col-sm-4">
						 <div class="form-check">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" value="BREAKFAST" v-model="recipe.type">
								Breakfast
							</label>
						</div>
						<div class="form-check">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" value="LUNCH" v-model="recipe.type">
								Lunch
							</label>
						</div>
						<div class="form-check">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" value="DINNER" v-model="recipe.type">
								Dinner
							</label>
						</div>
						 <div class="form-check">
							<label class="form-check-label">
								<input class="form-check-input" type="checkbox" value="SNACK" v-model="recipe.type">
								Snack
							</label>
						</div>
					</div>
					
				</div>
			</div>
		</div>


		<!-- time row -->
		<div class="row mb-2">
			<div class="col">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col">	
								<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">General info</h5>
							</div>
						</div>
						<div class="row">
							
							<div class="col">
								<div class="form-group row">
									<label class="col-sm-4 col-form-label">Servings</label>
									<div class="col-sm-8">
										<div class="input-group mb-3">
											<input type="number" class="form-control" aria-label="Servings" v-model="recipe.servings">
										</div>
									</div>
								</div>
							</div>
						</div>	
						<div class="row">
							<div class="col">
								<div class="form-group row">
									<label class="col-sm-4 col-form-label">Preparation time</label>
									<div class="col-sm-8">
										<div class="input-group mb-3">
											<input type="number" class="form-control" aria-label="Preparation time" v-model="recipe.preparationTime">
											  <div class="input-group-append">
												<span class="input-group-text">minutes</span>
											  </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<div class="form-group row">
									<label  class="col-sm-4 col-form-label">Cooking time</label>
									<div class="col-sm-8">
										<div class="input-group mb-3">
											<input type="number" class="form-control" aria-label="Cooking time" v-model="recipe.cookingTime">
											  <div class="input-group-append">
												<span class="input-group-text">minutes</span>
											  </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<!-- end time row -->
		
		<!-- instructions -->
		<div class="row  mb-2">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Instructions</h5>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="col">
						  <div class="form-group">
							  <label >Step 1</label>
							  <textarea class="form-control" rows="3" v-model="recipe.instructions"></textarea>
						</div>
					</div>
					<div class="col-sm-2">
					</div>
				</div>
				<!--
				<div class="row align-items-center">
					<div class="col">
						  <div class="form-group">
							  <label >Step 2</label>
							  <textarea class="form-control" rows="3"></textarea>
						</div>
					</div>
					<div class="col-sm-2 ">
						<a href="#" class="btn btn-primary mb-1 ">X</a>
					</div>
				</div>
				
				
				<div class="row">
					<div class="col">
						<a href="#" class="btn btn-primary mb-1">Add step</a>
					</div>
				</div>
        -->
			</div>
		</div>
		<!-- end of instructions -->
				
		<!-- nutriotional information row -->
		<div class="row  mb-2">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Ingredients</h5>
					</div>
				</div>
				
				<IngredientEditableRow v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.id" :ingredient="ingredient"
        @ingredientRemoved="removeIngredient" />
					
				<div class="row">
					<div class="col">
						<a class="btn btn-primary mb-1" @click="addIngredient">Add ingredient</a>
            </div>
				</div>
				
			</div>
		</div>
		<!-- end nutriotional information row -->

	</div>
<!-- end of column header and tags-->

<!-- column image-->
	<div class="col ">
		  <div class="form-group">
			<label for="exampleInputFile">Image selection</label>
			<input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
		</div>
	</div>
<!-- end of column image-->

</div>
<!-- end of header, tags and picture row -->


<!-- error message -->
<div class="alert alert-dismissible alert-danger" v-if="errorOccurred">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading">Oops!</h4>
  <p class="mb-0">Something went wrong!</p>
</div>
<!-- end of error message -->

<!-- buttons -->
<div class="row">
	<div class="col-8"></div>
	<div class="col-4">
		<a class="btn btn-primary mb-1" id="save-button" @click="saveRecipe">Save</a>
		<router-link class="btn btn-primary mb-1" :to="{name:'RecipeListView'}">Cancel</router-link>
		<a href="#" class="btn btn-primary mb-1">Delete</a>
	</div>
</div>
<!--end of buttons -->

</div> <!--parent container -->
</template>

<script>
import axios from "axios";
import ConversionService from "../utils/ConversionService.js";
import IngredientEditableRow from "../components/IngredientEditableRow";

export default {
  name: "RecipeNewView",
  props: ["food"],
  data() {
    return {
      recipe: { ingredients: [], type: [] },
      errorOccurred: false
    };
  },
  components: { IngredientEditableRow },
  created() {
    if (this.food) {
      this.recipe.ingredients.push({
        food: this.food,
        amount: { unit: "GRAM" }
      });
    }
  },
  methods: {
    convertIngredientsToGram(ingredients) {
      for (var i in ingredients) {
        ingredients[i].amount = this.convertToGram(ingredients[i].amount);
      }
      this.recipe.ingredients = ingredients;
    },
    convertToGram(amount) {
      if (amount) {
        var conversionService = new ConversionService();
        return { weight: conversionService.toGram(amount), unit: "GRAM" };
      }
    },
    saveRecipe() {
      axios
        .post("http://localhost:8080/recipes/", this.recipe)
        .then(response => {
          this.errorOccurred = false;
        })
        .catch(err => (this.errorOccurred = true));
    },
    addIngredient() {
      this.recipe.ingredients.push({ food: {}, amount: { unit: "GRAM" } });
    },
    removeIngredient(ingredient) {
      this.recipe.ingredients = this.recipe.ingredients.filter(
        item => item !== ingredient
      );
    }
  }
};
</script>
