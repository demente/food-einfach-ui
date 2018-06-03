import Vue from 'vue'
import Router from 'vue-router'
import RecipeView from '@/views/RecipeView'
import RecipeEditableView from '@/views/RecipeEditableView'
import FoodListView from '@/views/FoodListView'
import RecipeListView from '@/views/RecipeListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/recipes/:id',
        name: 'RecipeView',
        component: RecipeView,
        props: true
      },
      {
          path: '/recipes',
          name: 'RecipeListView',
          component: RecipeListView,
          props: true
       },
       {
            path: '/recipes/:id/edit',
            name: 'RecipeEditableView',
            component: RecipeEditableView,
            props: true
         },
         {
              path: '/food',
              name: 'FoodListView',
              component: FoodListView,
              props: true
            }
  ],
  linkActiveClass: "active"
})
