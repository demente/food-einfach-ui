<template>
    <div class="row">
		<div class="col">
      <router-link class="breadcrumb-item" :to="{name:'FoodView', params: {id: ingredient.food.id}}">{{ingredient.food.name}}</router-link>
		</div>
	    <div class="col text-right">{{convert(ingredient.amount)}}</div>
    </div>
</template>

<script>
import ConversionService from "../utils/ConversionService.js";

export default {
  name: "IngredientRow",
  props: ["ingredient"],
  methods: {
    convert(amount) {
      var conversionService = new ConversionService();
      var convertedAmount = conversionService.toBestUnit(amount);
      return (
        convertedAmount.weight +
        " " +
        conversionService.toAbbreviation(convertedAmount.unit)
      );
    }
  }
};
</script>

