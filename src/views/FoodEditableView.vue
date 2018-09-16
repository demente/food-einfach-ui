<template>
<div class="container rounded  pt-2 pb-2" style="background-color:white;">
    <!--breadcrumb-->
    
<div class="row ">
  <div class="col">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a href="#">Food</a></li>
		<li class="breadcrumb-item active">{{food.name}} (editing)</li>
	</ol>
  </div>
</div>
<!--end of breadcrumb -->

<!-- header, tags and picture row -->
<div class="row">
<!-- column header and tags-->
	<div class="col">
		<div class="row">
			<div class="col">
				<div class="form-group row">
					<label for="name" class="col-sm-2 col-form-label">Name</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="name" placeholder="Enter food name" v-model="food.name">
					</div>
				</div>
			</div>
		</div>
		
		<div class="row mb-2">
			<div class="col">
				<div class="form-group row">
					<label class="col-sm-2 col-form-label">Type</label>
					<div class="col-sm-10">
						<select class="form-control" v-model="food.type">
							<option value="FRUIT">Fruit</option>
							<option value="VEGETABLE">Vegetable</option>
							<option value="GRAIN">Grain</option>
							<option value="MEAT">Meat</option>
							<option value="DAIRY">Dairy</option>
						</select>
					</div>
				</div>
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
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">Calories</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="number" class="form-control" aria-label="Calories" v-model="food.nutritionalInformation.calories">
									  <div class="input-group-append">
										<span class="input-group-text">cal</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">Protein</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="number" class="form-control" aria-label="Protein" v-model="food.nutritionalInformation.protein.weight">
									  <div class="input-group-append">
										<span class="input-group-text">g</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">Fat</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="number" class="form-control" aria-label="Fat" v-model="food.nutritionalInformation.fat.weight">
									  <div class="input-group-append">
										<span class="input-group-text">g</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">Carbohydrates</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="number" class="form-control" aria-label="Carbohydrates" v-model="food.nutritionalInformation.carbohydrates.weight">
									  <div class="input-group-append">
										<span class="input-group-text">g</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">Fibre</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="number" class="form-control" aria-label="Fibre" v-model="food.nutritionalInformation.fibre.weight">
									  <div class="input-group-append">
										<span class="input-group-text">g</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					
					<div class="col">
						<div class="form-group row">
							<label for="name" class="col-sm-4 col-form-label">Sugar</label>
							<div class="col-sm-8">
								<div class="input-group mb-3">
									<input type="number" class="form-control" aria-label="Sugar" v-model="food.nutritionalInformation.sugar.weight">
									  <div class="input-group-append">
										<span class="input-group-text">g</span>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end nutriotional information row -->

	</div>
<!-- end of column header and tags-->

<!-- column image-->
	<div class="col ">
		  <div class="form-group">
			<label for="exampleInputFile">Image selection</label>
			<input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
		</div>
	</div>
<!-- end of column image-->

</div>
<!-- end of header, tags and picture row -->

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
                <element-editable-row v-for="vitamin in sortedVitamins" :element="vitamin" v-bind:key="vitamin.name"/>
			</div>
		</div>
	</div>
	
	<div class="col">
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
                <element-editable-row v-for="mineral in sortedMinerals" :element="mineral" v-bind:key="mineral.name"/>
				</div>
		</div>
	</div>
	
	<div class="col">
	</div>
</div>
<!-- end minerals row -->

<!-- error message -->
<div class="alert alert-dismissible alert-danger" v-if="errorOccurred">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading">Oops!</h4>
  <p class="mb-0">Something went wrong!</p>
</div>

<!-- end of error message -->

<!-- buttons -->
<div class="row">
	<div class="col-8"></div>
	<div class="col-4">
		<a class="btn btn-primary mb-1" id="save-button" @click="saveFood">Save</a>
		<router-link class="btn btn-primary mb-1" :to="{name:'FoodView', params: {id: food.id}}">Cancel</router-link>
		<a class="btn btn-primary mb-1" id="delete-button" @click="deleteFood">Delete</a>
	</div>
</div>
<!--end of buttons -->
</div>
</template>

<script>
import axios from "axios";
import ConversionService from "../utils/ConversionService.js";
import ElementEditableRow from "../components/ElementEditableRow";

export default {
  name: "FoodEditableView",
  props: ["id"],
  components: { ElementEditableRow },
  data() {
    return {
      errorOccurred: false,
      food: {
        nutritionalInformation: {
          protein: { unit: "GRAM", weight: 0 },
          fat: { unit: "GRAM", weight: 0 },
          carbohydrates: { unit: "GRAM", weight: 0 },
          fibre: { unit: "GRAM", weight: 0 },
          sugar: { unit: "GRAM", weight: 0 },
          vitamins: [],
          minerals: []
        }
      }
    };
  },
  created() {
    axios
      .get("http://localhost:8080/food/" + this.id)
      .then(response => this.convertFood(response.data));
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
  },
  methods: {
    convertFood(data) {
      this.food = data;
      this.convertNutrientsToGram(data.nutritionalInformation);
      this.convertVitaminsToMilligram(data.nutritionalInformation.vitamins);
      this.convertMineralsToMilligram(data.nutritionalInformation.minerals);
    },
    convertNutrientsToGram(nutritionalInformation) {
      this.food.nutritionalInformation.protein = this.convertToGram(
        nutritionalInformation.protein
      );
      this.food.nutritionalInformation.fat = this.convertToGram(
        nutritionalInformation.fat
      );
      this.food.nutritionalInformation.carbohydrates = this.convertToGram(
        nutritionalInformation.carbohydrates
      );
      this.food.nutritionalInformation.sugar = this.convertToGram(
        nutritionalInformation.sugar
      );
      this.food.nutritionalInformation.fibre = this.convertToGram(
        nutritionalInformation.fibre
      );
    },
    convertVitaminsToMilligram(vitamins) {
      for (var i in vitamins) {
        vitamins[i].amount = this.convertToMilligram(vitamins[i].amount);
      }
      this.food.nutritionalInformation.vitamins = vitamins;
    },
    convertMineralsToMilligram(minerals) {
      for (var i in minerals) {
        minerals[i].amount = this.convertToMilligram(minerals[i].amount);
      }
      this.food.nutritionalInformation.minerals = minerals;
    },
    saveFood() {
      axios
        .post("http://localhost:8080/food/", this.food)
        .then(response => {
          this.errorOccurred = false;
          thsi.convertFood(response.data);
        })
        .catch(err => (this.errorOccurred = true));
    },
    deleteFood() {
      axios
        .delete("http://localhost:8080/food/" + this.id)
        .then(response => {
          this.errorOccurred = false;
          this.$router.push({ name: "FoodListView" });
        })
        .catch(err => (this.errorOccurred = true));
    },
    convertToGram(amount) {
      if (amount) {
        var conversionService = new ConversionService();
        return { weight: conversionService.toGram(amount), unit: "GRAM" };
      }
    },
    convertToMilligram(amount) {
      if (amount) {
        var conversionService = new ConversionService();
        return {
          weight: conversionService.toMilligram(amount),
          unit: "MILLIGRAM"
        };
      }
    }
  }
};
</script>

