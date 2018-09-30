import RecipeEditableView from '@/views/RecipeEditableView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('RecipeEditableView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates recipe object with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      ingredients: []
    }

    moxios.stubRequest('http://localhost:8080/recipes/1', {
      status: 200,
      response: expected
    })

    const recipeEditableView = shallowMount(RecipeEditableView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(recipeEditableView.vm.recipe).to.equal(expected)
      done()
    })
  })

  it('converts ingredients amount to gram', (done) => {
    var expected = [
      { amount: { weight: 10, unit: 'GRAM' } }
    ]

    moxios.stubRequest('http://localhost:8080/recipes/1', {
      status: 200,
      response: {
        id: 1,
        ingredients: [
          { amount: { weight: 10000000, unit: 'MICROGRAM' } }
        ]
      }
    })

    const recipeEditableView = shallowMount(RecipeEditableView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(recipeEditableView.vm.recipe.ingredients).to.deep.equal(expected)
      done()
    })
  })

  it('adds empty ingredient', (done) => {
    moxios.stubRequest('http://localhost:8080/recipes/1', {
      status: 200,
      response: {
        ingredients: []
      }
    })

    const recipeEditableView = shallowMount(RecipeEditableView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      recipeEditableView.vm.addIngredient()

      expect(recipeEditableView.vm.recipe.ingredients.length).to.equal(1)
      done()
    })
  })

  it('removes ingredient', (done) => {
    const expected = { id: 1, amount: { weight: 100, unit: 'GRAM' } }

    moxios.stubRequest('http://localhost:8080/recipes/1', {
      status: 200,
      response: {
        ingredients: [expected]
      }
    })

    const recipeEditableView = shallowMount(RecipeEditableView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      recipeEditableView.vm.removeIngredient(expected)

      expect(recipeEditableView.vm.recipe.ingredients.length).to.equal(0)
      done()
    })
  })
})
