<template>
  <div class="row">
    <div class="col-2">{{element.name}}</div>
    <div class="col text-right">
      <a
        class="dropdown-toggle text-danger"
        @click="showFoodModal"
        v-if="deviation(element.amount.weight, element.dailyNorm.weight) > 50"
      />
      <a
        class="dropdown-toggle text-danger"
        @click="showFoodModal"
        v-if="deviation(element.amount.weight, element.dailyNorm.weight) > 90"
      />
      <a
        class="dropdown-toggle text-danger"
        @click="showFoodModal"
        v-if="element.amount.weight < element.dailyNorm.weight"
      ></a>
      {{convert(element.amount)}} of {{convert(element.dailyNorm )}}
    </div>
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
    },
    deviation(value, compareToValue) {
      return ((compareToValue - value) * 100) / compareToValue;
    }
  }
};
</script>

