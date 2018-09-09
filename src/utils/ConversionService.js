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
}
