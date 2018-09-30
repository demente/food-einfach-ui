<template>
    <div class="container rounded  pt-2 pb-2" style="background-color:white;">
<!--breadcrumb-->
<div class="row ">
  <div class="col">
	<ol class="breadcrumb">
		<router-link class="breadcrumb-item" :to="{name:'MealPlanListView'}">Meal Planner</router-link>
		<li class="breadcrumb-item active">Week {{mealPlan.startDate}} - {{mealPlan.endDate}} (editing)</li>
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
					<label  class="col-sm-2 col-form-label">Start date</label>
					<div class="col-sm-10">
						<input type="date" class="form-control" placeholder="Start date" v-model="mealPlan.startDate">
					</div>
				</div>
			</div>
			<div class="col">
				<div class="form-group row">
					<label  class="col-sm-2 col-form-label">End date</label>
					<div class="col-sm-10">
						<input type="date" class="form-control" placeholder="Start date" v-model="mealPlan.endDate">
					</div>
				</div>
			</div>
		</div>
				
        <EditableDayWeek v-for="day in ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY', 'FRIDAY','SATURDAY','SUNDAY']" :key="day" :dayOfWeek="day" :recipes="mealPlan.recipes"
				@recipeRemoved="removeRecipe"/>
		
	</div>
<!-- end of column header and tags-->

<!-- column image-->
	<div class="col ">
			</div>
<!-- end of column image-->

</div>
<!-- end of header, tags and picture row -->


<!-- buttons -->
<div class="row">
	<div class="col-8"></div>
	<div class="col-4">
	<a class="btn btn-primary mb-1" id="save-button" @click="saveMealPlan">Save</a>
		<router-link class="btn btn-primary mb-1" :to="{name:'MealPlanView', params: {id: mealPlan.id}}">Cancel</router-link>
		<a href="#" class="btn btn-primary mb-1">Delete</a>
	</div>
</div>
<!--end of buttons -->

</div> <!--parent container -->

</template>

<script>
import axios from "axios";
import MealEditableRow from "../components/MealEditableRow";
import EditableDayWeek from "../components/EditableDayWeek";

export default {
  name: "MealPlanEditableView",
  props: ["id"],
  components: { MealEditableRow, EditableDayWeek },
  data() {
    return {
      mealPlan: { recipes: [] },
      errorOccurred: false
    };
  },
  created() {
    axios
      .get("http://localhost:8080/mealplans/" + this.id)
      .then(response => (this.mealPlan = response.data));
  },
  methods: {
    recipesForDay(day) {
      return this.mealPlan.recipes.filter(item => item.dayOfWeek === day);
    },
    removeRecipe(recipe) {
      this.mealPlan.recipes = this.mealPlan.recipes.filter(
        item => item != recipe
      );
    },
    saveMealPlan() {
      axios
        .post("http://localhost:8080/mealplans/", this.mealPlan)
        .then(response => {
          this.errorOccurred = false;
        })
        .catch(err => (this.errorOccurred = true));
    }
  }
};
</script>
