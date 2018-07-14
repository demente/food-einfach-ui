<template>
<div class="container">
	<div class="row">
    <div  class="col">
		<h1>{{recipe.name}}</h1>
	</div>
	<div class="col text-right">
			<router-link type="button" class="btn btn-primary" :to="{name:'RecipeEditableView', params: {id: recipe.id}}">Edit</router-link>
	</div>
	</div>

	<RecipeType :types="recipe.type" />
	<div class="row">
		<div class="col">
			<PreparationInfo :servings="recipe.servings"
				:preparationTime="recipe.preparationTime"
				:cookingTime="recipe.cookingTime" />

			<IngredientList :ingredients="recipe.ingredients" />
		</div>
		<div class="col">
			<ImageBlock :images="recipe.images" />
			<ToggleableNutritionalInfo :elements="mineralsVitamins"
				:nutritionalInformation="nutrients" />
		</div>
	</div>
	{{recipe.instructions}}
</div>
</template>

<script>
import IngredientList from '../components/IngredientList'
import ImageBlock from '../components/ImageBlock'
import Instruction from '../components/Instruction'
import ToggleableNutritionalInfo from '../components/ToggleableNutritionalInfo'
import RecipeType from '../components/RecipeType'
import PreparationInfo from '../components/PreparationInfo'
import axios from 'axios'

export default {
	 name: 'RecipeView',
	 props: ['id'],
	  data () {
	    return {
	    	recipe: {
	    		name: null,
	    		type: [],
	    		servings: null,
	    		preparationTime: null,
	    		cookingTime: null,
	    		ingredients: [{id: null, food: {}}],
	    		images: [{file: require('../assets/meatballs.jpg'), description: 'Meatballs pic 1'},
	  			  {file: require('../assets/meatballs2.jpg'), description: 'Meatballs pic 2'},
	  			  {file: require('../assets/meatballs3.jpg'), description: 'Meatballs pic 3'}],
	    		steps: [{number: 1, description: 'some text here'}, {number:2, description: 'more text'}]
	    	}
	    }
	  },
	  components: {
		  IngredientList, ImageBlock, Instruction, ToggleableNutritionalInfo, RecipeType, PreparationInfo
	  },
	 created() {
      axios.get("http://localhost:8080/recipes/"+this.id).then((response)=>this.updateRecipe(response.data))
  },
   methods: {
    updateRecipe(recipe){
      this.recipe=recipe
	}
	},
	computed: {
			mineralsVitamins() {
				var elements = {minerals: [], vitamins: []}
				var minerals = {}
				var vitamins = {}
				var vitaminDailyNorms = {}
				var mineralDailyNorms = {}
				
				for(var i in this.recipe.ingredients){
					for(var j in this.recipe.ingredients[i].food.nutritionalInformation.minerals){
						var mineral = this.recipe.ingredients[i].food.nutritionalInformation.minerals[j]

						if(minerals[mineral.name]){
							
							minerals[mineral.name] += mineral.amount.weight	
						}
						else {
							minerals[mineral.name] = mineral.amount.weight	
							mineralDailyNorms[mineral.name] = mineral.dailyNorm.weight
						}
					
					}
					for(var k in  this.recipe.ingredients[i].food.nutritionalInformation.vitamins){
						var vitamin = this.recipe.ingredients[i].food.nutritionalInformation.vitamins[k]
						

						if(vitamins[vitamin.name]){
							vitamins[vitamin.name] += vitamin.amount.weight	
						}
						else {
							vitaminDailyNorms[vitamin.name] = vitamin.dailyNorm.weight
							vitamins[vitamin.name] = vitamin.amount.weight	
						}
					
					}
				}

				for(var key in minerals){
 				 var value = minerals[key];
 				 elements.minerals.push({name: key, amount:minerals[key], dailyNorm: mineralDailyNorms[key]})
				}
				
				for(var key in vitamins){
 				 var value = vitamins[key];
 				 elements.vitamins.push({name: key, amount:vitamins[key], dailyNorm: vitaminDailyNorms[key]})
				}
				

				return elements
			},
			nutrients() {
				var sum = {calories: 0, carbohydrates: 0, protein: 0, fat:0, fibre: 0, sugar: 0}
				for(var i in this.recipe.ingredients){
					
					sum.calories += this.recipe.ingredients[i].food.nutritionalInformation.calories
					sum.carbohydrates += this.recipe.ingredients[i].food.nutritionalInformation.carbohydrates.weight
					sum.protein += this.recipe.ingredients[i].food.nutritionalInformation.protein.weight
					sum.fat += this.recipe.ingredients[i].food.nutritionalInformation.fat.weight
					sum.fibre += this.recipe.ingredients[i].food.nutritionalInformation.fibre.weight
					sum.sugar += this.recipe.ingredients[i].food.nutritionalInformation.sugar.weight
				}
				
				return sum
			}
	}
}
</script>