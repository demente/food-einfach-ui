import IngredientRow from '@/components/IngredientRow.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('IngredientRow.vue', () => {
  it('renders ingredient name', () => {
    const ingredientRow = shallowMount(IngredientRow, {
      propsData: {
        ingredient: {
          food: { id: 1, name: 'Test name' }, amount: { weight: 100, unit: 'GRAM' }
        }
      }
    })
    expect(ingredientRow.html()).contains('Test name')
  })

  it('renders ingredient amount', () => {
    const ingredientRow = shallowMount(IngredientRow, {
      propsData: {
        ingredient: {
          food: { id: 1, name: 'Test name' }, amount: { weight: 10000, unit: 'MILLIGRAM' }
        }
      }
    })
    expect(ingredientRow.html()).contains('10 g')
  })

  it('renders link to ingredient page', () => {
    const ingredientRow = shallowMount(IngredientRow, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        ingredient: {
          food: { id: 1, name: 'Test name' }, amount: { weight: 10000, unit: 'MILLIGRAM' }
        }
      }
    })
    expect(ingredientRow.find(RouterLinkStub).props().to).to.deep.equal({ name: 'FoodView', params: { id: 1 } })
  })
})
