<template>
<div class="row">
	    <div class="col">{{element.name}}</div>
		<div class="col text-right">
      <a class="dropdown-toggle text-danger" @click="showFoodModal" v-if="element.amount.weight < element.dailyNorm.weight"></a> {{convert(element.amount)}}</div>
      </div>	
</template>


<script>
import ConversionService from "../utils/ConversionService.js";

export default {
  name: "ElementRow",
  props: ["element"],
  methods: {
    convert(amount) {
      var conversionService = new ConversionService();
      var convertedAmount = conversionService.toBestUnit(amount);
      return (
        convertedAmount.weight +
        " " +
        conversionService.toAbbreviation(convertedAmount.unit)
      );
    },
    showFoodModal() {
      this.$emit("showFoodModal", this.element);
    }
  }
};
</script>

