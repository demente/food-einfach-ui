<template>
    	<div class="row align-items-top " >
					<div class="col">
						<div class="input-group mb-3 autocomplete">
							<input type="text" class="form-control" placeholder="Enter ingredient name" v-model="ingredient.food.name" debounce="500" @input="searchFood">
							<div class="autocomplete-items">
							<div v-for="food in foodList" v-bind:key="food.id" @click="selectFood(food)">
								{{ food.name }}
							</div>
  						</div>
						</div>
					
					</div>
					<div class="col">
						<div class="input-group mb-3">
							<input type="text" class="form-control" aria-label="Amount" v-model="ingredient.amount.weight">
							<div class="input-group-append">
								<span class="input-group-text">g</span>
							</div>
						</div>
					</div>
					<div class="col-sm-2 ">
						<a class="btn btn-primary mb-1 " @click="removeIngredient(ingredient)">X</a>
					</div>
		</div>
</template>


<script>
import axios from "axios";

export default {
  name: "IngredientEditableRow",
  props: ["ingredient"],
  data() {
    return { foodList: [] };
  },
  methods: {
    removeIngredient(ingredient) {
      this.$emit("ingredientRemoved", ingredient);
    },
    searchFood() {
      if (this.ingredient.food.name.length > 2) {
        axios
          .get("http://localhost:8080/food?name=" + this.ingredient.food.name)
          .then(resp => (this.foodList = resp.data));
      }
    },
    selectFood(food) {
      this.ingredient.food = food;
      this.foodList = [];
    }
  }
};
</script>


<style>
.autocomplete {
  /*the container must be positioned relative:*/
  position: relative;
  /*display: inline-block;*/
}
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  word-wrap: break-word;
}
.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}
.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>