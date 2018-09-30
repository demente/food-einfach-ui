<template>
    
<div class="container rounded  pt-2 pb-2" style="background-color:white;">
<!--breadcrumb-->
<div class="row ">
  <div class="col">
	<ol class="breadcrumb">
		<router-link class="breadcrumb-item" :to="{name:'RecipeListView'}">Recipes</router-link>
		<li class="breadcrumb-item active">{{recipe.name}}</li>
	</ol>
  </div>
</div>
<!--end of breadcrumb -->

<!-- buttons -->
<div class="row">
	<div class="col justify-content-end">
		<router-link class="btn btn-primary mb-1" :to="{name:'RecipeEditableView', params: {id: recipe.id}}">Edit</router-link>
		<a href="#" class="btn btn-primary mb-1">Delete</a>
	</div>
</div>
<!--end of buttons -->

<!-- header, tags and picture row -->
<div class="row">
<!-- column header and tags-->
	<div class="col">
		<div class="row">
			<div class="col">
				<h1>{{recipe.name}}</h1>
			</div>
		</div>
		
		<div class="row mb-2">
			<div class="col">
        <a v-for="meal in recipe.type" v-bind:key="meal" class="btn btn-sm btn-secondary mb-1 mr-1">{{meal}}</a>
			</div>
		</div>
		
		
		<!-- time info row -->
		<div class="row  mb-2 ">
			<div class="container">
				<div class="row border  border-secondary mr-2 ml-2">
					<table class="table ">
						<tr class="table-secondary">
							<th class="text-right">Servings</th>
							<th class="text-right">Preparation time</th>
							<th class="text-right">Cooking time</th>
							<th  class="text-right">Total time</th>
						</tr>
						<tr>
							<td class="text-right">{{recipe.servings}}</td>
							<td class="text-right">{{recipe.preparationTime}}</td>
							<td class="text-right">{{recipe.cookingTime}}</td>
							<td class="text-right">{{recipe.preparationTime + recipe.cookingTime}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<!-- end of time info row -->
	
		<!-- ingredients row -->
		<div class="row  mb-2 ">
			<div class="container ">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Ingredients</h5>
					</div>
				</div>
        <ingredient-row v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.id" :ingredient="ingredient"/>
				</div>
		</div>
		<!-- end ingredients row -->

		<!-- instructions row -->
		<div class="row  mb-2">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Instructions</h5>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2"><b>Step 1</b></div>
					<div class="col-sm-10">{{recipe.instructions}}</div>
				</div>
			</div>
		</div>
		<!-- end instructions row -->
</div>
<!-- end of column header and tags-->

<!-- column image-->
	<div class="col">
		<div class="row  mb-2">
			<img class="rounded-circle mx-auto d-block" src="../assets/default-food.jpg"/> 
		</div>
		<!-- nutriotional information row -->
		<div class="row  mb-2">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Nutritional info (per serving)</h5>
					</div>
				</div>
				<div class="row">
					<div class="col">Calories</div>
					<div class="col text-right">{{nutritionalInformationPerServing.calories}} kcal</div>
				</div>
				<div class="row">
					<div class="col">Protein</div>
					<div class="col text-right">{{convertToGram(nutritionalInformationPerServing.protein)}} g</div>
				</div>
				<div class="row">
					<div class="col">Fat</div>
					<div class="col text-right">{{convertToGram(nutritionalInformationPerServing.fat)}} g</div>
				</div>
				<div class="row">
					<div class="col">Carbohydrates</div>
					<div class="col text-right">{{convertToGram(nutritionalInformationPerServing.carbohydrates)}} g</div>
				</div>
				<div class="row">
					<div class="col">Fibre</div>
					<div class="col text-right">{{convertToGram(nutritionalInformationPerServing.fibre)}} g</div>
				</div>
				<div class="row">
					<div class="col">Sugar</div>
					<div class="col text-right">{{convertToGram(nutritionalInformationPerServing.sugar)}} g</div>
				</div>
			</div>
		</div>
		<!-- end nutriotional information row -->
	
		<!-- vitamin row -->
		<div class="row mb-2">
			<div class="col">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col">	
								<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Vitamins (per portion)</h5>
							</div>
						</div>
              <ElementRow v-for="vitamin in sortedVitamins" v-bind:key="vitamin.name" :element="vitamin"/>
            </div>
				</div>
			</div>
			
		</div>
		<!-- end vitamin row -->

		<!-- minerals row -->
		<div class="row  mb-2">
			<div class="col">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col">	
								<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Minerals</h5>
							</div>
						</div>
            <ElementRow v-for="mineral in sortedMinerals" v-bind:key="mineral.name" :element="mineral"/>
						
					</div>
				</div>
			</div>
			
		</div>
		<!-- end minerals row -->

	</div>
<!-- end of column image-->

</div>
<!-- end of header, tags and picture row -->


</div> <!--parent container -->

</template>

<script>
import axios from "axios";
import ConversionService from "../utils/ConversionService.js";
import ElementRow from "../components/ElementRow";
import IngredientRow from "../components/IngredientRow";
import NutritionalInformationService from "../utils/NutritionalInformationService.js";

export default {
  name: "RecipeView",
  props: ["id"],
  data() {
    return {
      recipe: {}
    };
  },
  components: { IngredientRow, ElementRow },
  created() {
    axios
      .get("http://localhost:8080/recipes/" + this.id)
      .then(response => (this.recipe = response.data));
  },
  methods: {
    convertToGram(amount) {
      if (amount) {
        var conversionService = new ConversionService();
        return conversionService.toGram(amount);
      }
    }
  },
  computed: {
    nutritionalInformationPerServing() {
      const nutritionalInformationService = new NutritionalInformationService();
      return nutritionalInformationService.perRecipeServing(this.recipe);
    },
    sortedVitamins() {
      return this.nutritionalInformationPerServing.vitamins.sort(function(
        a,
        b
      ) {
        return a.name > b.name;
      });
    },
    sortedMinerals() {
      return this.nutritionalInformationPerServing.minerals.sort(function(
        a,
        b
      ) {
        return a.name > b.name;
      });
    }
  }
};
</script>
