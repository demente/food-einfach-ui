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
  name: 'ToggleableNutritionalInfo',
  props: ['elements', 'nutrients'],
  data() {
	  return {
		toggled: false
		}
  },
  components: {NutritionRow}
}
</script>