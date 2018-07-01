<template>
<div class="row">
	<div class="col">{{element.name}}</div>
	<div class="col text-right">{{convertAmount(element.amount)}}</div>
  <div class="col text-right">{{convertAmount(element.dailyNorm)}}</div>
</div>
</template>

<script>
export default {
  name: "NutritionalInfoRow",
  props: ["element", "unit"],
  methods: {
    convertAmount(amount) {
      var converted;
      switch (this.unit) {
        case "GRAM":
         converted = amount.weight / 1000000 + " g";
          break;
        case "MILLIGRAM":
          converted = amount.weight / 1000 + " mg";
          break;
        default:
          converted = amount.weight + " μg";
      }
      return converted;
    }
  }
};
</script>

