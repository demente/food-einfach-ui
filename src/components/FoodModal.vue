<template>
<div style="position: fixed; z-index: 9998;" v-if="visible">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Food rich in {{element.name}}</h5>
        <button type="button" class="close" aria-label="Close" @click="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <ul class="list-group list-group-flush">
            <router-link class="list-group-item" :to="{name:'FoodView', params: {id: food.id}}"  v-for="food in foodList" :key="food.id">{{food.name}}</router-link>
            </ul>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-secondary"  @click="close">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "FoodModal",
  props: ["visible", "element"],
  data() {
    return {
      foodList: []
    };
  },
  watch: {
    element: function(newElement) {
      this.foodList = [];
      this.searchFood(newElement);
    }
  },
  methods: {
    close() {
      this.foodList = [];
      this.$emit("closed");
    },
    searchFood(element) {
      var endpointUrl;
      if (element.type === "MINERAL") {
        endpointUrl = "http://localhost:8080/food/mineral/" + element.name;
      } else {
        endpointUrl = "http://localhost:8080/food/vitamin/" + element.name;
      }
      axios.get(endpointUrl).then(resp => (this.foodList = resp.data));
    }
  }
};
</script>

<style>
</style>
