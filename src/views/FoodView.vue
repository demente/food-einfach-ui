<template>
<div class="container rounded  pt-2 pb-2" style="background-color:white;">



<!--breadcrumb-->
<div class="row ">
  <div class="col">
	<ol class="breadcrumb">
		<router-link class="breadcrumb-item" :to="{name:'FoodListView'}">Food</router-link>
		<li class="breadcrumb-item active">{{food.name}}</li>
	</ol>
  </div>
</div>
<!--end of breadcrumb -->
<RecipeModal :visible="showModal" @closed="showModal = false" :food="food" />

<!-- buttons -->
<div class="row">
	<div class="col justify-content-end">
		<a href="#" class="btn btn-primary mb-1"  @click="showModal = !showModal">Add to recipe</a>
		<router-link class="btn btn-primary mb-1" :to="{name:'FoodEditableView', params: {id: food.id}}">Edit</router-link>
		<a href="#" class="btn btn-primary mb-1">Delete</a>
	</div>
</div>
<!--end of buttons -->

<!-- header, tags and picture row -->
<div class="row">
<!-- column header and tags-->
	<div class="col">
		<div class="row">
			<div class="col">
				<h1>{{food.name}}</h1>
			</div>
		</div>
		
		<div class="row mb-2">
			<div class="col" v-if="food.type">
				<a href="#" class="btn btn-sm btn-secondary mb-1">{{food.type}}</a>
			</div>
		</div>
				
		<!-- nutriotional information row -->
		<div class="row  mb-2">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Nutritional info</h5>
					</div>
				</div>
				<div class="row">
					<div class="col">Calories</div>
					<div class="col text-right">{{food.nutritionalInformation.calories}} kcal</div>
				</div>
				<div class="row">
					<div class="col">Protein</div>
					<div class="col text-right">{{convert(food.nutritionalInformation.protein)}} g</div>
				</div>
				<div class="row">
					<div class="col">Fat</div>
					<div class="col text-right">{{convert(food.nutritionalInformation.fat)}} g</div>
				</div>
				<div class="row">
					<div class="col">Carbohydrates</div>
					<div class="col text-right">{{convert(food.nutritionalInformation.carbohydrates)}} g</div>
				</div>
				<div class="row">
					<div class="col">Fibre</div>
					<div class="col text-right">{{convert(food.nutritionalInformation.fibre)}} g</div>
				</div>
				<div class="row">
					<div class="col">Sugar</div>
					<div class="col text-right">{{convert(food.nutritionalInformation.sugar)}} g</div>
				</div>
			</div>
		</div>
		<!-- end nutriotional information row -->
		<!-- vitamin row -->
<div class="row mb-2">
	<div class="col">
		<div class="row">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Vitamins</h5>
					</div>
				</div>
				<ElementRow v-for="vitamin in sortedVitamins" v-bind:key="vitamin.name" :element="vitamin"/>
			</div>
		</div>
	</div>
	
</div>
<!-- end vitamin row -->

<!-- minerals row -->
<div class="row  mb-2">
	<div class="col">
		<div class="row">
			<div class="container">
				<div class="row">
					<div class="col">	
						<h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Minerals</h5>
					</div>
				</div>
				<ElementRow v-for="mineral in sortedMinerals" v-bind:key="mineral.name" :element="mineral"/>
				</div>
		</div>
	</div>
	
</div>
<!-- end minerals row -->

	</div>
<!-- end of column header and tags-->

<!-- column image-->
	<div class="col">
		<img class="rounded-circle mx-auto d-block" src="../assets/default-food.jpg"/> 
	</div>
<!-- end of column image-->

</div>
<!-- end of header, tags and picture row -->

</div>
</template>

<script>
import axios from "axios";
import ConversionService from "../utils/ConversionService.js";
import ElementRow from "../components/ElementRow";
import RecipeModal from "../components/RecipeModal";

export default {
  name: "FoodView",
  props: ["id"],
  components: { ElementRow, RecipeModal },
  data() {
    return {
      food: { nutritionalInformation: { minerals: [], vitamins: [] } },
      showModal: false
    };
  },
  created() {
    axios
      .get("http://localhost:8080/food/" + this.id)
      .then(response => (this.food = response.data));
  },
  methods: {
    updateFood(response) {
      this.food = response.data;
    },
    convert(amount) {
      if (amount) {
        var conversionService = new ConversionService();
        return conversionService.toGram(amount);
      }
    }
  },
  computed: {
    sortedVitamins() {
      return this.food.nutritionalInformation.vitamins.sort(function(a, b) {
        return a.name > b.name;
      });
    },
    sortedMinerals() {
      return this.food.nutritionalInformation.minerals.sort(function(a, b) {
        return a.name > b.name;
      });
    }
  }
};
</script>
