import IngredientEditableRow from '@/components/IngredientEditableRow.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('IngredientEditableRow.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('searches for food if entered food name is longer than 2 chars', (done) => {
    const expected = [{ id: 1 }, { id: 2 }]

    moxios.stubRequest('http://localhost:8080/food?name=apple', {
      status: 200,
      response: expected
    })

    const ingredientEditableRow = shallowMount(IngredientEditableRow, { propsData: { ingredient: { food: {}, amount: { weight: 0, unit: 'GRAM' } } } })

    ingredientEditableRow.vm.ingredient.food.name = 'apple'

    ingredientEditableRow.vm.searchFood()

    moxios.wait(() => {
      expect(ingredientEditableRow.vm.foodList).to.equal(expected)
      done()
    })
  })
})
