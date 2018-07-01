<template>
<div class="container">
	  <fieldset>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="food.name">
    </div>
	<div class="form-group">
      <label>Type</label>
      <select class="form-control" v-model="food.type">
        <option>Dairy</option>
        <option>Vegetable</option>
        <option>Fruit</option>
        <option>Meat</option>
        <option>Fish</option>
      </select>
    </div>

	<div class="form-group">
		<label class="control-label">Calories</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="food.nutritionalInformation.calories">
        	<div class="input-group-append">
        		<span class="input-group-text">kcal</span>
        	</div>
        </div>
    </div>

	<div class="form-group">
		<label class="control-label">Protein</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount"  v-model="food.nutritionalInformation.protein.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">g</span>
        	</div>
        </div>
    </div>

	<div class="form-group">
		<label class="control-label">Carbohydrates</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="food.nutritionalInformation.carbohydrates.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">g</span>
        	</div>
        </div>
    </div>

	<div class="form-group">
		<label class="control-label">Fat</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="food.nutritionalInformation.fat.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">g</span>
        	</div>
        </div>
    </div>

	<div class="form-group">
		<label class="control-label">Sugar</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="food.nutritionalInformation.sugar.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">g</span>
        	</div>
        </div>
    </div>

	<div class="form-group">
		<label class="control-label">Dietary fibre</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="food.nutritionalInformation.fibre.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">g</span>
        	</div>
        </div>
    </div>
	  </fieldset>

<fieldset>
<legend>Vitamins</legend>
	
	<div class="form-group" v-for="vitamin in food.nutritionalInformation.vitamins" :key="vitamin.id">
		<label class="control-label">{{vitamin.name}}</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="vitamin.amount.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">mg</span>
        	</div>
        </div>
    </div>
</fieldset>

<fieldset>
<legend>Minerals</legend>
	
	<div class="form-group" v-for="mineral in food.nutritionalInformation.minerals" :key="mineral.id">
		<label class="control-label">{{mineral.name}}</label>
        <div class="input-group mb-3">
        	<input type="text" class="form-control" aria-label="Amount" v-model="mineral.amount.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">mg</span>
        	</div>
        </div>
    </div>


<button type="submit" class="btn btn-primary" @click="saveFood">Save</button>
  </fieldset>


</div>
</template>

<script>
import axios from "axios";

export default {
  name: "FoodEditableView",
  props: ["id"],
  data() {
    return {
      food: {}
    };
  },
  created() {
    axios
      .get("http://localhost:8080/food/" + this.id)
      .then(response => this.updateFood(response));
  },
  methods: {
    updateFood(response) {
      this.food = response.data;
    },
    saveFood() {
      axios.post("http://localhost:8080/food/", this.food);
    }
  }
};
</script>
