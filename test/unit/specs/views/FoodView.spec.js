import FoodView from '@/views/FoodView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('FoodView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates food object with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      name: 'Test',
      nutritionalInformation: {
        calories: 12,
        minerals: [],
        vitamins: []
      }
    }

    moxios.stubRequest('http://localhost:8080/food/1', {
      status: 200,
      response: expected
    })

    const foodView = shallowMount(FoodView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(foodView.vm.food).to.equal(expected)
      done()
    })
  })

  it('converts amount to gram', () => {
    const foodView = shallowMount(FoodView)

    var converted = foodView.vm.convert({ unit: 'MICROGRAM', weight: 9000000 })

    expect(converted).to.equal(9)
  })
})
