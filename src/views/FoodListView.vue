<template>
<div class="container">
	<div class="row">
		<h1>Food</h1>
	</div>
	<div class="row">
		<input class="form-control" placeholder="Filter..."
			v-model="foodFilter" />
	</div>
	<div class="row">&nbsp;</div>
	<div class="row">
		<div class="col font-weight-bold ">Name</div>
		<div class="col font-weight-bold ">Type</div>
	</div>
	<FoodRow v-for="food in filteredFoodList" :food="food" :key="food.id" />
</div>
</template>

<script>
import FoodRow from '../components/FoodRow'

export default {
	 name: 'FoodListView',
	 components: {FoodRow},
	 data(){
		 return {
			 foodList: [{id: 1, name: 'Quinoa', type: 'Grains'},
				 {id:2, name: 'Milk', type: 'Diary'},
				 {id:3, name: 'Tomato', type: 'Vegetable'}],
			foodFilter: ''
		 }
	 },
	 computed: {
		 filteredFoodList() {
			 var filterValue = this.foodFilter.toLowerCase()
			 return this.foodList.filter(function(food) {
					return food.name.toLowerCase().includes(filterValue) || food.type.toLowerCase().includes(filterValue);
				});
		 }
	 }
}
</script>
