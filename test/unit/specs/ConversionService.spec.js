import ConversionService from '@/utils/ConversionService.js'

describe('ConversionService.js', () => {
  const service = new ConversionService()

  it('returns weight converted to micrograms', () => {
    const elementInMilligram = { weight: 20, unit: 'MILLIGRAM' }
    const elementInGram = { weight: 20, unit: 'GRAM' }
    const elementInMicrogram = { weight: 20, unit: 'MICROGRAM' }

    expect(service.toMicrogram(elementInMilligram)).to.equal(20000)
    expect(service.toMicrogram(elementInGram)).to.equal(20000000)
    expect(service.toMicrogram(elementInMicrogram)).to.equal(20)
  })

  it('returns weight converted to milligrams', () => {
    const elementInMilligram = { weight: 20, unit: 'MILLIGRAM' }
    const elementInGram = { weight: 20, unit: 'GRAM' }
    const elementInMicrogram = { weight: 20, unit: 'MICROGRAM' }

    expect(service.toMilligram(elementInMilligram)).to.equal(20)
    expect(service.toMilligram(elementInGram)).to.equal(20000)
    expect(service.toMilligram(elementInMicrogram)).to.equal(0.02)
  })

  it('returns weight converted to grams', () => {
    const elementInMilligram = { weight: 2000000, unit: 'MILLIGRAM' }
    const elementInGram = { weight: 2000000, unit: 'GRAM' }
    const elementInMicrogram = { weight: 2000000, unit: 'MICROGRAM' }

    expect(service.toGram(elementInMilligram)).to.equal(2000)
    expect(service.toGram(elementInGram)).to.equal(2000000)
    expect(service.toGram(elementInMicrogram)).to.equal(2)
  })

  it('converts to unit with best matching precision', () => {
    const elementInMilligram = { weight: 1000, unit: 'MICROGRAM' }
    const elementInGram = { weight: 1000000, unit: 'MICROGRAM' }
    const elementInMicrogram = { weight: 100, unit: 'MICROGRAM' }

    expect(service.toBestUnit(elementInMilligram)).to.deep.equal({ weight: 1, unit: 'MILLIGRAM' })
    expect(service.toBestUnit(elementInGram)).to.deep.equal({ weight: 1, unit: 'GRAM' })
    expect(service.toBestUnit(elementInMicrogram)).to.deep.equal({ weight: 100, unit: 'MICROGRAM' })
  })
})
