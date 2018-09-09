<template>
<div class="row">
	    <div class="col">{{element.name}}</div>
		<div class="col text-right">{{convert(element.amount)}}</div>
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
    }
  }
};
</script>

