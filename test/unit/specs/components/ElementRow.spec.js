import ElementRow from '@/components/ElementRow.vue'
import { shallowMount } from '@vue/test-utils'

describe('ElementRow.vue', () => {
  it('renders element name', () => {
    const elementRow = shallowMount(ElementRow, {
      propsData: {
        element: {
          name: 'Test name', amount: { weight: 100, unit: 'GRAM' }
        }
      }
    })
    expect(elementRow.html()).contains('Test name')
  })

  it('renders element amount', () => {
    const elementRow = shallowMount(ElementRow, {
      propsData: {
        element: {
          name: 'Test name', amount: { weight: 10000, unit: 'MILLIGRAM' }
        }
      }
    })
    expect(elementRow.html()).contains('10 g')
  })
})
