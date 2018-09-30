<template>
<div class="container rounded  pt-2 pb-2" style="background-color:white;">
    <div class="row">
        <table>
            <thead>
                <th></th>
                <th>Period</th>
                </thead>
            <tbody>
                <tr v-for="mealPlan in mealPlanList" v-bind:key="mealPlan.id">
                    <td><router-link class="fa fa-pencil" aria-hidden="true" :to="{name:'MealPlanEditableView', params: {id: mealPlan.id}}"></router-link></td>
                    <td><router-link :to="{name:'MealPlanView', params: {id: mealPlan.id}}">{{mealPlan.startDate}} - {{mealPlan.endDate}}</router-link></td>
                    </tr>
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col">
            <router-link class="btn btn-primary mb-1" :to="{name:'MealPlanNewView'}">New</router-link>
        </div>
    </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "MealPlanListView",
  data() {
    return {
      mealPlanList: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/mealplans/")
      .then(response => (this.mealPlanList = response.data));
  }
};
</script>

