import RecipeView from '@/views/RecipeView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('RecipeView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates recipe object with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      name: 'Test',
      type: [],
      ingredients: []
    }

    moxios.stubRequest('http://localhost:8080/recipes/1', {
      status: 200,
      response: expected
    })

    const recipeView = shallowMount(RecipeView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(recipeView.vm.recipe).to.equal(expected)
      done()
    })
  })

  it('converts amount to gram', () => {
    const recipeView = shallowMount(RecipeView)

    var converted = recipeView.vm.convertToGram({ unit: 'MICROGRAM', weight: 9000000 })

    expect(converted).to.equal(9)
  })

  it('returns nutritional information per gram', (done) => {
    var recipe = {
      id: 1,
      name: 'Test',
      type: [],
      servings: 2,
      ingredients: [{
        'food': {
          'id': 1,
          'nutritionalInformation': {
            'calories': 100,
            'protein': {
              'weight': 10000000,
              'unit': 'MICROGRAM'
            },
            'fat': {
              'weight': 20000000,
              'unit': 'MICROGRAM'
            },
            'carbohydrates': {
              'weight': 30000000,
              'unit': 'MICROGRAM'
            },
            'sugar': {
              'weight': 40000000,
              'unit': 'MICROGRAM'
            },
            'fibre': {
              'weight': 50000000,
              'unit': 'MICROGRAM'
            },
            'vitamins': [
              {
                'name': 'A',
                'amount': {
                  'weight': 20,
                  'unit': 'MICROGRAM'
                },
                'dailyNorm': {
                  'weight': 6000,
                  'unit': 'MICROGRAM'
                }
              }
            ],
            'minerals': [
              {
                'name': 'Ca',
                'amount': {
                  'weight': 30,
                  'unit': 'MICROGRAM'
                },
                'dailyNorm': {
                  'weight': 1000000,
                  'unit': 'MICROGRAM'
                }
              }
            ]
          }
        },
        'amount': {
          'weight': 100000000,
          'unit': 'MICROGRAM'
        }
      }]
    }

    const expected = {
      'calories': 50,
      'protein': {
        'weight': 5000000,
        'unit': 'MICROGRAM'
      },
      'fat': {
        'weight': 10000000,
        'unit': 'MICROGRAM'
      },
      'carbohydrates': {
        'weight': 15000000,
        'unit': 'MICROGRAM'
      },
      'sugar': {
        'weight': 20000000,
        'unit': 'MICROGRAM'
      },
      'fibre': {
        'weight': 25000000,
        'unit': 'MICROGRAM'
      },
      'vitamins': [
        {
          'name': 'A',
          'amount': {
            'weight': 10,
            'unit': 'MICROGRAM'
          },
          'dailyNorm': {
            'weight': 6000,
            'unit': 'MICROGRAM'
          }
        }
      ],
      'minerals': [
        {
          'name': 'Ca',
          'amount': {
            'weight': 15,
            'unit': 'MICROGRAM'
          },
          'dailyNorm': {
            'weight': 1000000,
            'unit': 'MICROGRAM'
          }
        }
      ]
    }

    moxios.stubRequest('http://localhost:8080/recipes/1', {
      status: 200,
      response: recipe
    })

    const recipeView = shallowMount(RecipeView, {
      propsData: {
        id: 1
      }
    })

    moxios.wait(() => {
      expect(recipeView.vm.nutritionalInformationPerServing).to.deep.equal(expected)
      done()
    })
  })
})
