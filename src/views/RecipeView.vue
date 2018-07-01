<template>
<div class="container">
	<div class="row">
    <div>
        <h1>{{recipe.name}}</h1>
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
			<ToggleableNutritionalInfo :elements="recipe.elements"
				:nutrients="recipe.nutrients" />
		</div>
	</div>
	<Instruction :steps="recipe.steps" />
</div>
</template>

<script>
import IngredientList from '../components/IngredientList'
import ImageBlock from '../components/ImageBlock'
import Instruction from '../components/Instruction'
import ToggleableNutritionalInfo from '../components/ToggleableNutritionalInfo'
import RecipeType from '../components/RecipeType'
import PreparationInfo from '../components/PreparationInfo'

export default {
	 name: 'RecipeView',
	 props: ['id'],
	  data () {
	    return {
	    	recipe: {
	    		name: 'Meatballs',
	    		type: [{name:'Lunch', link: ''},{name:'Dinner', link: ''},{name:'Main Course', link: ''}],
	    		servings: 2,
	    		preparationTime: 20,
	    		cookingTime: 40,
	    		ingredients: [{name: 'Beef', amount: '200 g'},{name: 'Onion', amount: '1 medium'}],
	    		elements: [{name: 'A', amount: '10 mg', rdi: '10%'},{name: 'B', amount: '10 mg', rdi: '10%'},{name: 'B6', amount: '10 mg', rdi: '10%'},{name:'B12', amount: '10 mg', rdi: '10%'}],
	    		nutrients: [{name: 'Calories', amount: '2000 kcal'},
	    			{name: 'Carbohydrates', amount: '20 gr'},
	    			{name:'of which sugars', amount:'2 gr', parent: 'Carbohydrates'},
	    			{name: 'Fats', amount: '5gr'},
	    			{name: 'of which saturated', amount: '1 gr', parent: 'Fat'},
	    			{name: 'Protein', amount: '200 gr'}],
	    		images: [{file: require('../assets/meatballs.jpg'), description: 'Meatballs pic 1'},
	  			  {file: require('../assets/meatballs2.jpg'), description: 'Meatballs pic 2'},
	  			  {file: require('../assets/meatballs3.jpg'), description: 'Meatballs pic 3'}],
	    		steps: [{number: 1, description: 'some text here'}, {number:2, description: 'more text'}]
	    	}
	    }
	  },
	  components: {
		  IngredientList, ImageBlock, Instruction, ToggleableNutritionalInfo, RecipeType, PreparationInfo
	  }
}
</script>