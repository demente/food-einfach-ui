<template>
<div class="container">
	  <fieldset>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="recipe.name">
    </div>

    <div class="form-group">
      <label>Preparation Time (in minutes)</label>
      <input type="number" class="form-control" v-model.number="recipe.preparationTime">
    </div>

    <div class="form-group">
      <label>Servings</label>
      <input type="number" class="form-control" v-model.number="recipe.servings">
    </div>

    <div class="form-group">
      <label>Instructions</label>
      <textarea class="form-control" v-model="recipe.instructions" rows="3"></textarea>
    </div>
	  </fieldset>

    <fieldset>
      <legend>Ingredients
        <button class="btn btn-primary" @click="addIngredient">Add</button>
      </legend>
 

  <div class="form-group" v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.id">
        <div class="input-group mb-3">
          
        <FoodAutocompletionField @updateFood="ingredient.food = $event"/>
        
    	  <input type="text" class="form-control" aria-label="Amount" v-model.number="ingredient.amount.weight">
        	<div class="input-group-append">
        		<span class="input-group-text">g</span>
        	</div>
        
        </div>
    </div>
      

     
    </fieldset>

    <fieldset>
      <button type="submit" class="btn btn-primary" @click="saveRecipe">Save</button>
      <div class="alert alert-danger" role="alert" v-if="saveFailed">
        Saving failed!
      </div>
      <div class="alert alert-sucess" role="alert"  v-if="saveSucceeded">
        Save successful!
      </div>
	  </fieldset>
</div>
</template>

<script>
import axios from "axios";
import FoodAutocompletionField from '../components/FoodAutocompletionField'

export default {
  name: "RecipeNewView",
  components: {FoodAutocompletionField},
  data() {
    return {
      recipe: {
        name: "",
        preparationTime: null,
        servings: null,
        instructions: "",
        ingredients: [{id: null,
        food: {},
        amount: {weight: null, unit: "GRAM"}}]
        
      },
      saveFailed: false,
      saveSucceeded: false
    };
  },
  methods: {
    saveRecipe() {
      axios.post("http://localhost:8080/recipes/", this.recipe).then(() => this.showSaveSuccess()).catch(() => this.showSaveFailure());
    },
    addIngredient(){
      this.recipe.ingredients.push({id: null, food: {},
        amount: {weight: null, unit: "GRAM"}})
    },
    showSaveSuccess(){
      this.saveSucceeded = true
      setTimeout(()=>{ this.saveSucceeded  = false; }, 2000);
    },
      showSaveFailure(){
      this.saveFailed = true
      setTimeout(()=>{ this.saveFailed  = false; }, 2000);
    }
  }
};
</script>