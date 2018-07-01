<template>
    <div class="container">
        <div class="row">
	<div  class="col">
		<h1>{{food.name}}</h1>
	</div>
	<div class="col text-right">
			<router-link type="button" class="btn btn-primary" :to="{name:'FoodEditableView', params: {id: food.id}}">Edit</router-link>
		</div>
</div>
<div class="row">
  Type: {{food.type}}
</div>
        <NutritionalInfo :nutritionalInformation="food.nutritionalInformation"/>

        <div class="container">
          <div class="row"><b>Vitamins</b></div>          
          <NutritionalInfoRow v-for="vitamin in food.nutritionalInformation.vitamins" :key="vitamin.id" :element="vitamin" unit="MILLIGRAM" />
        </div>
        <div class="container">
         <div class="row"><b>Minerals</b></div> 
          <NutritionalInfoRow v-for="mineral in food.nutritionalInformation.minerals" :key="mineral.id" :element="mineral" unit="MILLIGRAM" />
        </div>
        </div>
</template>

<script>
import axios from "axios";
import NutritionalInfo from "../components/NutritionalInfo";
import NutritionalInfoRow from "../components/NutritionalInfoRow";

export default {
  name: "FoodView",
  props: ["id"],
  components: { NutritionalInfoRow, NutritionalInfo },
  data() {
    return {
      food: {}
    };
  },
  created() {
    axios
      .get("http://localhost:8080/food/" + this.id)
      .then(response => this.updateFood(response));
  },
  methods: {
    updateFood(response) {
      this.food = response.data;
    }
  }
};
</script>
