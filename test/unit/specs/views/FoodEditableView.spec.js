import FoodEditableView from '@/views/FoodEditableView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('FoodEditableView.vue', () => {
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

    const foodEditableView = shallowMount(FoodEditableView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(foodEditableView.vm.food).to.equal(expected)
      done()
    })
  })

  it('converts nutrients to gram, vitamins and minerals to milligrams', (done) => {
    var expected = {
      id: 1,
      name: 'Test',
      nutritionalInformation: {
        calories: 12,
        protein: { weight: 9, unit: 'GRAM' },
        fat: { weight: 1, unit: 'GRAM' },
        carbohydrates: { weight: 2, unit: 'GRAM' },
        sugar: { weight: 3, unit: 'GRAM' },
        fibre: { weight: 4, unit: 'GRAM' },
        minerals: [{
          name: 'Fe',
          amount: { weight: 1000, unit: 'MILLIGRAM' }
        }],
        vitamins: [{ name: 'A', amount: { weight: 2000, unit: 'MILLIGRAM' } }]
      }
    }

    moxios.stubRequest('http://localhost:8080/food/1', {
      status: 200,
      response: {
        id: 1,
        name: 'Test',
        nutritionalInformation: {
          calories: 12,
          protein: { weight: 9000000, unit: 'MICROGRAM' },
          fat: { weight: 1000000, unit: 'MICROGRAM' },
          carbohydrates: { weight: 2000000, unit: 'MICROGRAM' },
          sugar: { weight: 3000000, unit: 'MICROGRAM' },
          fibre: { weight: 4000, unit: 'MILLIGRAM' },
          minerals: [{
            name: 'Fe',
            amount: { weight: 1000000, unit: 'MICROGRAM' }
          }],
          vitamins: [{ name: 'A', amount: { weight: 2, unit: 'GRAM' } }]
        }
      }
    })

    const foodEditableView = shallowMount(FoodEditableView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(foodEditableView.vm.food).to.deep.equal(expected)
      done()
    })
  })
})
