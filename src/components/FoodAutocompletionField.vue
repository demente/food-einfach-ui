<template>
 <div class="autocomplete col">
      <input type="text" class="form-control" @input="searchForFood" v-model="foodName">
      <div class="autocomplete-items">
         <div v-for="food in foodList" v-bind:key="food.id" @click="selectFood(food)">
          {{ food.name }}
        </div>
      </div>
 </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "FoodAutocompletionField",
  props: ['food'],
  data() {
      return {
        foodName: "",
        foodList: [],
        selectedFood: null
      }
  },
  created(){
    if(this.food){
      this.foodName = this.food.name
    }
  },
  methods: {
    searchForFood() {
      axios
        .get("http://localhost:8080/food?name=" + this.foodName)
        .then(resp => this.updateFoodList(resp.data));
    },
    updateFoodList(foodList) {
      this.foodList = foodList;
    },
    selectFood(selectedFood){
        this.foodName = selectedFood.name
        this.foodList = []
        this.selectedFood = selectedFood
        this.$emit('updateFood', selectedFood)
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
