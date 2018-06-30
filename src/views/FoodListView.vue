<template>
<div class="container">
	<div class="row">&nbsp;</div>

	<div class="row">
		<h1>Food</h1>
	</div>
	<div class="row">&nbsp;</div>
	
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
import FoodRow from "../components/FoodRow";
import axios from "axios";

export default {
  name: "FoodListView",
  components: { FoodRow },
  data() {
    return {
      foodList: [],
      foodFilter: ""
    };
  },
  created() {
    axios
      .get("http://localhost:8080/food/")
      .then(response => this.updateFoodList(response));
  },
  methods: {
    updateFoodList(response) {
      this.foodList = response.data;
    }
  },
  computed: {
    filteredFoodList() {
      var filterValue = this.foodFilter.toLowerCase();
      return this.foodList.filter(function(food) {
        return (
          food.name.toLowerCase().includes(filterValue) ||
          food.type.toLowerCase().includes(filterValue)
        );
      });
    }
  }
};
</script>
