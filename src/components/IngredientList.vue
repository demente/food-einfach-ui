<template>
<div class="column-sm  align-items-center">
	<div class="border-primary card">

		<div class="card-header text-white bg-primary">
			Ingredients
			<div class="float-right">
				<i class="fa fa-toggle-down" v-if="!toggled" @click="toggled = true"/> 
				<i class="fa fa-toggle-up" v-if="toggled" @click="toggled = false"/>
			</div>
		</div>

		<div class="card-body" v-if="!toggled">
			<IngredientRow v-for="ingredient in ingredients"
				:key="ingredient.id" :ingredient="ingredient" />
		</div>
	</div>
</div>
</template>

<script>
import IngredientRow from './IngredientRow'
export default {
  name: 'IngredientList',
  components: {IngredientRow},
  props: ['ingredients'],
  data(){
  return {
	  toggled:false
	  }}
}
</script>