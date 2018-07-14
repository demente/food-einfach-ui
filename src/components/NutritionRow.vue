<template>
<div class="row">
	<div class="col">{{element.name}}</div>
	<div class="col text-right">{{convert(element.amount)}}</div>
</div>
</template>

<script>
export default {
	name: 'NutritionRow',
	props: ['element'],
	  methods: {
	      convert(nutrientAmount){
			  if( nutrientAmount > 1000){
				return nutrientAmount / 1000 + ' mg'
			  }
          return nutrientAmount + " μg"
	  }
	  
  }
}
</script>