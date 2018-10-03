<template>
<div class="container rounded  pt-2 pb-2" style="background-color:white;">
    <div class="row">
        <div class="col">
            <router-link class="btn btn-primary mb-1" :to="{name:'FoodNewView'}">New</router-link>
        </div>
    </div>

    <table>
        <thead>
            <th></th>
            <th>Name</th>
            <th>Type</th>
        </thead>
        <tbody>
            <tr v-for="food in foodList" v-bind:key="food.id">
                <td><router-link class="fa fa-pencil" aria-hidden="true" :to="{name:'FoodEditableView', params: {id: food.id}}"></router-link></td>
                <td><router-link :to="{name:'FoodView', params: {id: food.id}}">{{food.name}}</router-link></td>
                <td>{{food.type}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "FoodListView",
  data() {
    return {
      foodList: [],
      sortOrder: "desc",
      sortBy: "name"
    };
  },
  created() {
    axios
      .get("http://localhost:8080/foodinfo/")
      .then(response => (this.foodList = response.data));
  },
  methods: {
    sort(sortBy, sortOrder) {
      this.sortOrder = sortOrder;
      this.sortBy = sortBy;

      this.foodList.sort(function(a, b) {
        if (sortBy === "name" && sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "name" && sortOrder === "desc") {
          return b.name.localeCompare(a.name);
        } else if (sortBy === "type" && sortOrder === "desc") {
          return b.type.localeCompare(a.type);
        } else {
          return a.type.localeCompare(b.type);
        }
      });
    }
  }
};
</script>

