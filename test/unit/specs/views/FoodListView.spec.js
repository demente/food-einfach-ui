import FoodListView from '@/views/FoodListView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('FoodListView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates food list with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      name: 'Test',
      type: 'FRUIT'
    }

    moxios.stubRequest('http://localhost:8080/foodinfo/', {
      status: 200,
      response: [expected]
    })

    const foodListView = shallowMount(FoodListView)

    moxios.wait(() => {
      expect(foodListView.vm.foodList).to.contain(expected)
      done()
    })
  })
})
