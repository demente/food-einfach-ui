<template>
    <div class="container">
        <div class="row">
          <b>Nutritional information per 100 g:</b>
        </div>
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
     </div>
</template>

<script>
export default {
  name: "NutritionalInfo",
  props: ['nutritionalInformation'],
  methods: {
      convertToGrams(nutrientAmount){
          return nutrientAmount.weight / 1000000 + " g"
      }
  }
};
</script>

