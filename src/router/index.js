import Vue from 'vue'
import Router from 'vue-router'
import RecipeView from '@/views/RecipeView'
import RecipeEditableView from '@/views/RecipeEditableView'
import FoodListView from '@/views/FoodListView'
import RecipeListView from '@/views/RecipeListView'
import FoodView from '@/views/FoodView'
import FoodEditableView from '@/views/FoodEditableView'
import RecipeNewView from '@/views/RecipeNewView'

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
  ],
  linkActiveClass: "active"
})
