<template>
<div class="row">
	<div class="col">{{ingredient.food.name}}</div>
	<div class="col text-right">{{convertAmount(ingredient.amount)}}</div>
</div>
</template>

<script>
export default {
	name: 'IngredientRow',
	props: ['ingredient'],
	 methods: {
    convertAmount(amount) {
	  var converted;
      switch (amount.unit) {
        case "MICROGRAM":
         converted = amount.weight / 1000000 + " g";
          break;
        default:
          converted = amount.weight;
      }
      return converted;
    }
  }
}
</script>