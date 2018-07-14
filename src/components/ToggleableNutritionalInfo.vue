<template>
<div class="row align-items-center">
	<div class="card border-primary" style="width: 100%; margin-top: 1%">
		<div class="card-header text-white bg-primary">
			Nutritional Info

			<div class="float-right">
				<i class="fa fa-toggle-down" v-if="!toggled" @click="toggled = true" />
				<i class="fa fa-toggle-up" v-if="toggled" @click="toggled = false" />
			</div>
		</div>
		<div class="card-body" v-if="!toggled">
			<div class="row font-weight-bold">Energy value per serving:</div>
			<div class="row">
				<div class="col">Calories</div>
				<div class="colS text-right"> {{nutritionalInformation.calories}} kcal</div>
				</div>
				<div class="row">
				<div class="col">Protein</div>
				<div class="colS text-right"> {{convertToGrams(nutritionalInformation.protein)}}</div>
				</div>
				<div class="row">
				<div class="col">Carbohydrates</div>
				<div class="colS text-right"> {{convertToGrams(nutritionalInformation.carbohydrates)}}</div>
				</div>
				<div class="row">
				<div class="col">Fat</div>
				<div class="colS text-right"> {{convertToGrams(nutritionalInformation.fat)}}</div>
				</div>
				<div class="row">
				<div class="col">Sugars</div>
				<div class="colS text-right"> {{convertToGrams(nutritionalInformation.sugar)}}</div>
				</div>
				<div class="row">
				<div class="col">Fibre</div>
				<div class="colS text-right"> {{convertToGrams(nutritionalInformation.fibre)}}</div>
				</div>
			

			<div class="row font-weight-bold">Vitamins and minerals:</div>
			<NutritionRow v-for="element in elements.minerals" :key="element.name"
				:element="element" />

			
			<NutritionRow v-for="element in elements.vitamins" :key="element.name"
				:element="element" />
		</div>
	</div>
</div>
</template>

<script>
import NutritionRow from './NutritionRow'

export default {
  name: 'ToggleableNutritionalInfo',
  props: ['elements', 'nutritionalInformation'],
  data() {
	  return {
		toggled: false
		}
  },
  methods: {
	      convertToGrams(nutrientAmount){
          return nutrientAmount / 1000000 + " g"
	  }
	  
  },
  components: {NutritionRow}
}
</script>