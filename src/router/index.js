import Vue from 'vue'
import Router from 'vue-router'
import FoodView from '@/views/FoodView'
import FoodEditableView from '@/views/FoodEditableView'
import FoodListView from '@/views/FoodListView'
import FoodNewView from '@/views/FoodNewView'
import RecipeListView from '@/views/RecipeListView'
import RecipeView from '@/views/RecipeView'
import RecipeEditableView from '@/views/RecipeEditableView'
import RecipeNewView from '@/views/RecipeNewView'
import MealPlanListView from '@/views/MealPlanListView'
import MealPlanView from '@/views/MealPlanView'
import MealPlanEditableView from '@/views/MealPlanEditableView'
import MealPlanNewView from '@/views/MealPlanNewView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recipes/view/:id',
      name: 'RecipeView',
      component: RecipeView,
      props: true
    },
    {
      path: '/recipes',
      name: 'RecipeListView',
      component: RecipeListView
    },
    {
      path: '/recipes/edit/:id',
      name: 'RecipeEditableView',
      component: RecipeEditableView,
      props: true
    },

    {
      path: '/recipes/new',
      name: 'RecipeNewView',
      component: RecipeNewView
    },
    {
      path: '/food',
      name: 'FoodListView',
      component: FoodListView
    },
    {
      path: '/food/new',
      name: 'FoodNewView',
      component: FoodNewView
    },
    {
      path: '/food/view/:id',
      name: 'FoodView',
      component: FoodView,
      props: true
    },
    {
      path: '/food/edit/:id',
      name: 'FoodEditableView',
      component: FoodEditableView,
      props: true
    },

    {
      path: '/mealplans/edit/:id',
      name: 'MealPlanEditableView',
      component: MealPlanEditableView,
      props: true
    },
    {
      path: '/mealplans',
      name: 'MealPlanListView',
      component: MealPlanListView
    },
    {
      path: '/mealplans/view/:id',
      name: 'MealPlanView',
      component: MealPlanView,
      props: true
    },
    {
      path: '/mealplans/new',
      name: 'MealPlanNewView',
      component: MealPlanNewView
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
