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

			<NutritionRow v-for="nutrient in nutrients" :key="nutrient.name"
				:element="nutrient" />

			<div class="row font-weight-bold">Vitamins and minerals:</div>

			<NutritionRow v-for="element in elements" :key="element.name"
				:element="element" />
		</div>
	</div>
</div>
</template>

<script>
import NutritionRow from './NutritionRow'

export default {
  name: 'NutritionalInfo',
  data() {
	  return {
		toggled: false,
		elements: [{name: 'A', amount: '10 mg', rdi: '10%'},{name: 'B', amount: '10 mg', rdi: '10%'},{name: 'B6', amount: '10 mg', rdi: '10%'},{name:'B12', amount: '10 mg', rdi: '10%'}],
		nutrients: [{name: 'Calories', amount: '2000 kcal'},
			{name: 'Carbohydrates', amount: '20 gr'},
			{name:'of which sugars', amount:'2 gr', parent: 'Carbohydrates'},
			{name: 'Fats', amount: '5gr'},
			{name: 'of which saturated', amount: '1 gr', parent: 'Fat'},
			{name: 'Protein', amount: '200 gr'}]
	  }
  },
  components: {NutritionRow}
}
</script>