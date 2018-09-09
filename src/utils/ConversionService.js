export default class ConversionService {
  toGram (element) {
    if (element.unit === 'MICROGRAM') {
      return element.weight / 1000000
    }
    if (element.unit === 'GRAM') {
      return element.weight
    }
    if (element.unit === 'MILLIGRAM') {
      return element.weight / 1000
    }
  }

  toMicrogram (element) {
    if (element.unit === 'MICROGRAM') {
      return element.weight
    }
    if (element.unit === 'GRAM') {
      return element.weight * 1000000
    }
    if (element.unit === 'MILLIGRAM') {
      return element.weight * 1000
    }
  }

  toMilligram (element) {
    if (element.unit === 'MICROGRAM') {
      return element.weight / 1000
    }
    if (element.unit === 'GRAM') {
      return element.weight * 1000
    }
    if (element.unit === 'MILLIGRAM') {
      return element.weight
    }
  }

  toBestUnit (element) {
    var micrograms = this.toMicrogram(element)
    if (micrograms >= 1000000) {
      return { weight: this.toGram(element), unit: 'GRAM' }
    }
    if (micrograms >= 1000) {
      return { weight: this.toMilligram(element), unit: 'MILLIGRAM' }
    }
    return { weight: micrograms, unit: 'MICROGRAM' }
  }

  toAbbreviation (unit) {
    if (unit === 'GRAM') {
      return 'g'
    }
    if (unit === 'MILLIGRAM') {
      return 'mg'
    }
    if (unit === 'MICROGRAM') {
      return 'μg'
    }
  }
}
