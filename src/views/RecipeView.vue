<template>
<div class="container">
	<RecipeName />
	<RecipeType />
	<div class="row">
		<div class="col">
			<PreparationInfo />

			<IngredientList />
		</div>
		<div class="col">
			<ImageBlock />
			<NutritionalInfo />
		</div>
	</div>
	<Instruction />
</div>
</template>

<script>
import IngredientList from '../components/IngredientList'
import ImageBlock from '../components/ImageBlock'
import Instruction from '../components/Instruction'
import NutritionalInfo from '../components/NutritionalInfo'
import RecipeName from '../components/RecipeName'
import RecipeType from '../components/RecipeType'
import PreparationInfo from '../components/PreparationInfo'

export default {
	 name: 'RecipeView',
	 props: ['id'],
	  data () {
	    return {
	      
	    }
	  },
	  components: {
		  IngredientList, ImageBlock, Instruction, NutritionalInfo, RecipeName, RecipeType, PreparationInfo
	  }
}
</script>