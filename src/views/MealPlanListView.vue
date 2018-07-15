<template>
    <div class="container">
        <div class="row">&nbsp;</div>

       	<div class="row">
		<div class="col">
			<h1>Meal plans</h1>
		</div>
		<div class="col text-right">
			<router-link type="button" class="btn btn-primary" :to="{name:'MealPlanNewView'}">New</router-link>
		</div>
	</div>

    <div class="row">&nbsp;</div>


	<li v-for="mealPlan in mealPlans" v-bind:key="mealPlan.id">{{mealPlan.id}}</li>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "MealPlanListView",
    data() {
    return {
      mealPlans: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/mealPlans/")
      .then(response => this.updateMealPlans(response));
  },
  methods: {
    updateMealPlans(response) {
      this.mealPlans = response.data;
    }
  }
}
</script>



