
import NutritionalInformationService from '@/utils/NutritionalInformationService.js'

describe('NutritionalInformationService.js', () => {
    const service = new NutritionalInformationService();
    
    const expected = {
        "calories": 52,
        "protein": {
          "weight": 100,
          "unit": "MICROGRAM"
        },
        "fat": {
          "weight": 100,
          "unit": "MICROGRAM"
        },
        "carbohydrates": {
          "weight": 100,
          "unit": "MICROGRAM"
        },
        "sugar": {
          "weight": 100,
          "unit": "MICROGRAM"
        },
        "fibre": {
          "weight": 100,
          "unit": "MICROGRAM"
        },
        "vitamins": [
          {
            "name": "A",
            "amount": {
              "weight": 100,
              "unit": "MICROGRAM"
            },
            "dailyNorm": {
              "weight": 100,
              "unit": "MICROGRAM"
            }
          }
        ],
        "minerals": [
          {
            "name": "Ca",
            "amount": {
            "weight": 100,
            "unit": "MICROGRAM"
            },
            "dailyNorm": {
              "weight": 100,
              "unit": "MICROGRAM"
            }
          }
        ]
      }


  it('returns calculated average', () => {
    var actual = service.average([])
    expect(actual).to.deep.equal([])
  })

  it('divides all nutrients by divider', () => {
    var original = {
        "calories": 520,
        "protein": {
          "weight": 1000,
          "unit": "MICROGRAM"
        },
        "fat": {
          "weight": 1000,
          "unit": "MICROGRAM"
        },
        "carbohydrates": {
          "weight": 1000,
          "unit": "MICROGRAM"
        },
        "sugar": {
          "weight": 1000,
          "unit": "MICROGRAM"
        },
        "fibre": {
          "weight": 1000,
          "unit": "MICROGRAM"
        },
        "vitamins": [
          {
            "name": "A",
            "amount": {
              "weight": 1000,
              "unit": "MICROGRAM"
            },
            "dailyNorm": {
              "weight": 100,
              "unit": "MICROGRAM"
            }
          }
        ],
        "minerals": [
          {
            "name": "Ca",
            "amount": {
            "weight": 1000,
            "unit": "MICROGRAM"
            },
            "dailyNorm": {
              "weight": 100,
              "unit": "MICROGRAM"
            }
          }
        ]
      }

      expect(service.dividedBy(original,10)).to.deep.equal(expected)

  })
})
