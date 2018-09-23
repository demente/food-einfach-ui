import RecipeListView from '@/views/RecipeListView.vue'
import { shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import 'core-js'

describe('RecipeListView.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('updates recipe list with response from REST endpoint', (done) => {
    var expected = {
      id: 1,
      name: 'Test',
      type: ['BREAKFAST']
    }

    moxios.stubRequest('http://localhost:8080/recipeinfo/', {
      status: 200,
      response: [expected]
    })

    const recipeListView = shallowMount(RecipeListView)

    moxios.wait(() => {
      expect(recipeListView.vm.recipeList).to.contain(expected)
      done()
    })
  })

  it('concatenates types', () => {
    const recipeType = ['BREAKFAST', 'LUNCH']

    const recipeListView = shallowMount(RecipeListView)

    expect(recipeListView.vm.concat(recipeType)).to.equal('BREAKFAST, LUNCH')
  })

  it('returns empty string if no types are given', () => {
    const recipeType = []

    const recipeListView = shallowMount(RecipeListView)

    expect(recipeListView.vm.concat(recipeType)).to.equal('')
  })
})
