<template>
  <div class="container rounded pt-2 pb-2" style="background-color:white;">
    <!--breadcrumb-->
    <div class="row">
      <div class="col">
        <ol class="breadcrumb">
          <router-link class="breadcrumb-item" :to="{name:'MealPlanListView'}">Meal Planner</router-link>
          <li class="breadcrumb-item active">Week {{mealPlan.startDate}} - {{mealPlan.endDate}}</li>
        </ol>
      </div>
    </div>
    <!--end of breadcrumb -->
    <!-- buttons -->
    <div class="row">
      <div class="col justify-content-end">
        <router-link
          class="btn btn-primary mb-1"
          :to="{name:'MealPlanEditableView', params: {id: mealPlan.id}}"
        >Edit</router-link>
        <a href="#" class="btn btn-primary mb-1">Delete</a>
      </div>
    </div>
    <!--end of buttons -->
    <!-- header, tags and picture row -->
    <div class="row">
      <!-- column header and tags-->
      <div class="col">
        <div class="row">
          <div class="col">
            <h1>Week {{mealPlan.startDate}} - {{mealPlan.endDate}}</h1>
          </div>
        </div>

        <DayWeek
          v-for="day in ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY', 'FRIDAY','SATURDAY','SUNDAY']"
          :key="day"
          :recipes="recipesForDay(day)"
          :dayOfWeek="day"
        />
      </div>
      <!-- end of column header and tags-->
      <FoodModal
        :visible="showFoodModal"
        :element="foodModalElement"
        @closed="showFoodModal = false"
      />

      <!-- column image-->
      <div class="col">
        <!-- nutriotional information row -->
        <div class="row mb-2">
          <div class="container">
            <div class="row">
              <div class="col">
                <h5
                  class="badge-primary"
                  style="padding: 10px 10px; font-size:.9rem"
                >Nutritional info (average per day)</h5>
              </div>
            </div>
            <div class="row">
              <div class="col">Calories</div>
              <div class="col text-right">{{nutritionalInformationPerDay.calories}} kcal</div>
            </div>
            <div class="row">
              <div class="col">Protein</div>
              <div class="col text-right">{{convertToGram(nutritionalInformationPerDay.protein)}} g</div>
            </div>
            <div class="row">
              <div class="col">Fat</div>
              <div class="col text-right">{{convertToGram(nutritionalInformationPerDay.fat)}} g</div>
            </div>
            <div class="row">
              <div class="col">Carbohydrates</div>
              <div
                class="col text-right"
              >{{convertToGram(nutritionalInformationPerDay.carbohydrates)}} g</div>
            </div>
            <div class="row">
              <div class="col">Fibre</div>
              <div class="col text-right">{{convertToGram(nutritionalInformationPerDay.fibre)}} g</div>
            </div>
            <div class="row">
              <div class="col">Sugar</div>
              <div class="col text-right">{{convertToGram(nutritionalInformationPerDay.sugar)}} g</div>
            </div>
          </div>
        </div>
        <!-- end nutriotional information row -->
        <!-- vitamin row -->
        <div class="row mb-2">
          <div class="col">
            <div class="row">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h5
                      class="badge-primary"
                      style="padding: 10px 10px; font-size:.9rem"
                    >Vitamins (per day)</h5>
                  </div>
                </div>
                <ElementRow
                  v-for="vitamin in sortedVitamins"
                  :key="vitamin.name"
                  :element="vitamin"
                  @showFoodModal="updateFoodModal(vitamin, 'VITAMIN')"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- end vitamin row -->
        <!-- minerals row -->
        <div class="row mb-2">
          <div class="col">
            <div class="row">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h5 class="badge-primary" style="padding: 10px 10px; font-size:.9rem">Minerals</h5>
                  </div>
                </div>
                <ElementRow
                  v-for="mineral in sortedMinerals"
                  :key="mineral.name"
                  :element="mineral"
                  @showFoodModal="updateFoodModal(mineral, 'MINERAL')"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- end minerals row -->
      </div>
      <!-- end of column image-->
    </div>
    <!-- end of header, tags and picture row -->
  </div>
  <!--parent container -->
</template>

<script>
import axios from "axios";
import NutritionalInformationService from "../utils/NutritionalInformationService.js";
import ConversionService from "../utils/ConversionService.js";
import ElementRow from "../components/ElementRow";
import DayWeek from "../components/DayWeek.vue";
import FoodModal from "../components/FoodModal";

export default {
  name: "MealPlanView",
  props: ["id"],
  components: { ElementRow, DayWeek, FoodModal },
  data() {
    return {
      showFoodModal: false,
      foodModalElement: null,
      mealPlan: { recipes: [] }
    };
  },
  created() {
    axios
      .get("http://localhost:8080/mealplans/" + this.id)
      .then(response => (this.mealPlan = response.data));
  },
  methods: {
    updateFoodModal(element, type) {
      this.showFoodModal = true;
      this.foodModalElement = { name: element.name, type: type };
    },
    recipesForDay(day) {
      return this.mealPlan.recipes.filter(item => item.dayOfWeek === day);
    },
    convertToGram(amount) {
      if (amount) {
        var conversionService = new ConversionService();
        return conversionService.toGram(amount);
      }
    }
  },
  computed: {
    nutritionalInformationPerDay() {
      var recipeList = [];
      for (var i in this.mealPlan.recipes) {
        recipeList.push(this.mealPlan.recipes[i].recipe);
      }
      const nutritionalInformationService = new NutritionalInformationService();
      return nutritionalInformationService.averagePerDay(recipeList);
    },
    sortedVitamins() {
      return this.nutritionalInformationPerDay.vitamins.sort(function(a, b) {
        return a.name > b.name;
      });
    },
    sortedMinerals() {
      return this.nutritionalInformationPerDay.minerals.sort(function(a, b) {
        return a.name > b.name;
      });
    }
  }
};
</script>

