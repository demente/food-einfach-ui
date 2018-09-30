import MealPlanListView from '@/views/MealPlanListView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('MealPlanListView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates meal plan list with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      startDate: '201-01-02'
    }

    moxios.stubRequest('http://localhost:8080/mealplans/', {
      status: 200,
      response: [expected]
    })

    const mealPlanListView = shallowMount(MealPlanListView)

    moxios.wait(() => {
      expect(mealPlanListView.vm.mealPlanList).to.contain(expected)
      done()
    })
  })
})
