import MealPlanView from '@/views/MealPlanView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('MealPlanView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates meal plan object with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      startDate: '2018-01-01',
      endDate: '2018-01-08'
    }

    moxios.stubRequest('http://localhost:8080/mealplans/1', {
      status: 200,
      response: expected
    })

    const mealPlanView = shallowMount(MealPlanView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(mealPlanView.vm.mealPlan).to.equal(expected)
      done()
    })
  })

  it('returns recipes for given day', (done) => {
    const mealPlanView = shallowMount(MealPlanView)
    mealPlanView.vm.mealPlan = { id: 1, recipes: [{ id: 1, dayOfWeek: 'TUESDAY' }, { id: 2, dayOfWeek: 'WEDNESDAY' }] }

    const tuesdayRecipes = mealPlanView.vm.recipesForDay('TUESDAY')
    expect(tuesdayRecipes).to.equal({ id: 1, dayOfWeek: 'TUESDAY' })
  })
})
