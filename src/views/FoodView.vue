<template>
    <div>
        {{food.name}}
        <NutritionalInfo :nutrients=food.NutritionalInfo />
        </div>
</template>

<script>
import axios from 'axios';
import NutritionalInfo from '../components/NutritionalInfo'

export default {
  name: "FoodView",
  props: ["id"],
  components: {NutritionalInfo},
  data() {
    return {
      food: {}
    };
  },
  created() {
    axios
      .get("http://localhost:8080/food/"+this.id)
      .then(response => this.updateFood(response));
  },
  methods: {
    updateFood(response) {
      this.food = response.data;
    }
  }
};
</script>
