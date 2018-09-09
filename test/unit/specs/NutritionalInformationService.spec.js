import NutritionalInformationService from '@/utils/NutritionalInformationService.js'

describe('NutritionalInformationService.js', () => {
  const service = new NutritionalInformationService()
  const vitamin = {
    'name': 'A',
    'amount': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'dailyNorm': {
      'weight': 500,
      'unit': 'MICROGRAM'
    }
  }
  const mineral = {
    'name': 'Ca',
    'amount': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'dailyNorm': {
      'weight': 500,
      'unit': 'MICROGRAM'
    }
  }

  const nutritionalInfo = {
    'calories': 60,
    'protein': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'fat': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'carbohydrates': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'sugar': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'fibre': {
      'weight': 100,
      'unit': 'MICROGRAM'
    },
    'vitamins': [
      vitamin
    ],
    'minerals': [
      mineral
    ]
  }

  const ingredient = {
    'id': 1,
    'food': {
      'id': 2,
      'name': 'Apples',
      'nutritionalInformation': nutritionalInfo
    },
    'amount': {
      'weight': 400000000,
      'unit': 'MICROGRAM'
    }
  }

  const recipe = {
    'id': 1,
    'name': 'My recipe',
    'ingredients': [
      ingredient
    ],
    'servings': 4
  }

  it('divides all nutrients by divider', () => {
    var original = {
      'calories': 600,
      'protein': {
        'weight': 1000,
        'unit': 'MICROGRAM'
      },
      'fat': {
        'weight': 1000,
        'unit': 'MICROGRAM'
      },
      'carbohydrates': {
        'weight': 1000,
        'unit': 'MICROGRAM'
      },
      'sugar': {
        'weight': 1000,
        'unit': 'MICROGRAM'
      },
      'fibre': {
        'weight': 1000,
        'unit': 'MICROGRAM'
      },
      'vitamins': [
        {
          'name': 'A',
          'amount': {
            'weight': 1000,
            'unit': 'MICROGRAM'
          },
          'dailyNorm': {
            'weight': 500,
            'unit': 'MICROGRAM'
          }
        }
      ],
      'minerals': [
        {
          'name': 'Ca',
          'amount': {
            'weight': 1000,
            'unit': 'MICROGRAM'
          },
          'dailyNorm': {
            'weight': 500,
            'unit': 'MICROGRAM'
          }
        }
      ]
    }

    expect(service.dividedBy(original, 10)).to.deep.equal(nutritionalInfo)
  })

  it('calculates nutritional information per recipe serving', () => {
    var apple = {
      'id': 1,
      'food': {
        'id': 2,
        'name': 'Apples',
        'nutritionalInformation': nutritionalInfo
      },
      'amount': {
        'weight': 100000000,
        'unit': 'MICROGRAM'
      }
    }
    var actual = {
      'id': 1,
      'name': 'My recipe',
      'ingredients': [
        apple
      ],
      'servings': 2
    }

    const expected = {
      'calories': 30,
      'carbohydrates': {
        'unit': 'MICROGRAM',
        'weight': 50
      },
      'fat': {
        'unit': 'MICROGRAM',
        'weight': 50
      },
      'fibre': {
        'unit': 'MICROGRAM',
        'weight': 50
      },
      'minerals': [
        {
          'amount': {
            'unit': 'MICROGRAM',
            'weight': 50
          },
          'dailyNorm': {
            'unit': 'MICROGRAM',
            'weight': 500
          },
          'name': 'Ca'
        }
      ],
      'protein': {
        'unit': 'MICROGRAM',
        'weight': 50
      },
      'sugar': {
        'unit': 'MICROGRAM',
        'weight': 50
      },
      'vitamins': [
        {
          'amount': {
            'unit': 'MICROGRAM',
            'weight': 50
          },
          'dailyNorm': {
            'unit': 'MICROGRAM',
            'weight': 500
          },
          'name': 'A'
        }
      ]
    }

    expect(service.perRecipeServing(actual)).to.deep.equal(expected)
  })

  it('calculate total nutritional information', () => {
    const actual = {
      'calories': 30,
      'protein': {
        'weight': 50,
        'unit': 'MICROGRAM'
      },
      'fat': {
        'weight': 50,
        'unit': 'MICROGRAM'
      },
      'carbohydrates': {
        'weight': 50,
        'unit': 'MICROGRAM'
      },
      'sugar': {
        'weight': 50,
        'unit': 'MICROGRAM'
      },
      'fibre': {
        'weight': 50,
        'unit': 'MICROGRAM'
      },
      'vitamins': [
        {
          'name': 'A',
          'amount': {
            'weight': 50,
            'unit': 'MICROGRAM'
          },
          'dailyNorm': {
            'weight': 500,
            'unit': 'MICROGRAM'
          }
        }
      ],
      'minerals': [
        {
          'name': 'Ca',
          'amount': {
            'weight': 50,
            'unit': 'MICROGRAM'
          },
          'dailyNorm': {
            'weight': 500,
            'unit': 'MICROGRAM'
          }
        }
      ]
    }

    expect(service.total([actual, actual])).to.deep.equal(nutritionalInfo)
  })

  it('divides elements by divider', () => {
    const actual = [
      {
        'id': 1,
        'name': 'Ca',
        'amount': {
          'weight': 6000,
          'unit': 'MICROGRAM'
        },
        'dailyNorm': {
          'weight': 1000000,
          'unit': 'MICROGRAM'
        }
      }]
    const expected = [
      {
        'name': 'Ca',
        'amount': {
          'weight': 600,
          'unit': 'MICROGRAM'
        },
        'dailyNorm': {
          'weight': 1000000,
          'unit': 'MICROGRAM'
        }
      }
    ]

    expect(service.elementsDividedBy(actual, 10)).to.deep.equal(expected)
  })

  it('multiples elements by multiplier', () => {
    const actual = [
      {
        'id': 1,
        'name': 'Ca',
        'amount': {
          'weight': 60,
          'unit': 'MICROGRAM'
        },
        'dailyNorm': {
          'weight': 1000000,
          'unit': 'MICROGRAM'
        }
      }]
    const expected = [
      {
        'name': 'Ca',
        'amount': {
          'weight': 600,
          'unit': 'MICROGRAM'
        },
        'dailyNorm': {
          'weight': 1000000,
          'unit': 'MICROGRAM'
        }
      }
    ]

    expect(service.elementsMultipliedBy(actual, 10)).to.deep.equal(expected)
  })

  it('finds element with given name', () => {
    var expected = { name: 'Ca' }
    var elements = [{ name: 'Fe' }, { name: 'Cu' }, expected]
    expect(service.elementWithName(elements, 'Ca')).to.equal(expected)
  })

  it('adds mineral to the list', () => {
    var mineral = { name: 'Ca', amount: { weight: 10, unit: 'MICROGRAM' } }
    expect(service.addElement([mineral], [mineral])).to.deep.equal([{ name: 'Ca', amount: { weight: 20, unit: 'MICROGRAM' } }])
  })

  it('converts element to microgram', () => {
    var mineralInGrams = { name: 'Ca', amount: { weight: 0.00001, unit: 'GRAM' } }
    expect(service.addElement([{ name: 'Ca', amount: { weight: 10, unit: 'MICROGRAM' } }], [mineralInGrams])).to.deep.equal([{ name: 'Ca', amount: { weight: 20, unit: 'MICROGRAM' } }])
  })
})
