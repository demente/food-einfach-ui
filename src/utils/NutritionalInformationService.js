import ConversionService from './ConversionService'

export default class NutritionalInformationService {
  /**
   * @param {*} recipeList - list of recipes
   * @returns nutritionalInformation
   */
  average (recipeList) {
    var nutritionalInfoPerRecipe = []
    for (var i in recipeList) {
      var recipe = recipeList[i]
      nutritionalInfoPerRecipe.push(this.perRecipeServing(recipe))
    }
    var totals = this.total(nutritionalInfoPerRecipe)
    return this.dividedBy(totals, recipeList.length)
  }
  /**
   * @param {*} recipe
   * @returns nutritional information in one serving
   */
  perRecipeServing (recipe) {
    const conversionService = new ConversionService()
    var perIngredient = []

    for (var j in recipe.ingredients) {
      var ingredient = recipe.ingredients[j]

      var timesHundredGrams = ingredient.amount.weight / 100000000

      var info = {}
      info.calories = ingredient.food.nutritionalInformation.calories * timesHundredGrams
      info.carbohydrates = { weight: conversionService.toMicrogram(ingredient.food.nutritionalInformation.carbohydrates) * timesHundredGrams, unit: 'MICROGRAM' }
      info.fat = { weight: conversionService.toMicrogram(ingredient.food.nutritionalInformation.fat) * timesHundredGrams, unit: 'MICROGRAM' }
      info.fibre = { weight: conversionService.toMicrogram(ingredient.food.nutritionalInformation.fibre) * timesHundredGrams, unit: 'MICROGRAM' }
      info.protein = { weight: conversionService.toMicrogram(ingredient.food.nutritionalInformation.protein) * timesHundredGrams, unit: 'MICROGRAM' }
      info.sugar = { weight: conversionService.toMicrogram(ingredient.food.nutritionalInformation.sugar) * timesHundredGrams, unit: 'MICROGRAM' }
      info.vitamins = this.elementsMultipliedBy(ingredient.food.nutritionalInformation.vitamins, timesHundredGrams)
      info.minerals = this.elementsMultipliedBy(ingredient.food.nutritionalInformation.minerals, timesHundredGrams)

      perIngredient.push(info)
    }

    var total = this.total(perIngredient)
    return this.dividedBy(total, recipe.servings)
  }
  /**
   * @param {*} nutritionalInformationList list of nutritionalInfo
   * @returns nutritionalInfo
   */
  total (nutritionalInformationList) {
    const conversionService = new ConversionService()

    var total = {
      calories: 0,
      protein: { 'weight': 0, unit: 'MICROGRAM' },
      fat: { 'weight': 0, unit: 'MICROGRAM' },
      carbohydrates: { 'weight': 0, unit: 'MICROGRAM' },
      sugar: { 'weight': 0, unit: 'MICROGRAM' },
      fibre: { 'weight': 0, unit: 'MICROGRAM' },
      minerals: [],
      vitamins: []
    }
    for (var i in nutritionalInformationList) {
      var info = nutritionalInformationList[i]
      total.calories += info.calories
      total.protein.weight += conversionService.toMicrogram(info.protein)
      total.fat.weight += conversionService.toMicrogram(info.fat)
      total.carbohydrates.weight += conversionService.toMicrogram(info.carbohydrates)
      total.sugar.weight += conversionService.toMicrogram(info.sugar)
      total.fibre.weight += conversionService.toMicrogram(info.fibre)

      total.minerals = this.addElement(total.minerals, info.minerals)
      total.vitamins = this.addElement(total.vitamins, info.vitamins)
    }
    return total
  }

  /**
   *
   * @param {*} totals list of element with total weight
   * @param {*} elements list of elements to be added to totals list
   * @returns totals
   */
  addElement (totals, elements) {
    const conversionService = new ConversionService()

    for (var i in elements) {
      var element = elements[i]
      var elementTotal = this.elementWithName(totals, element.name)
      if (elementTotal) {
        elementTotal.amount.weight += conversionService.toMicrogram(element.amount)
      } else {
        element.amount.weight = conversionService.toMicrogram(element.amount)
        element.amount.unit = 'MICROGRAM'
        totals.push(element)
      }
    }
    return totals
  }
  /**
   * @param {*} elements list of elements
   * @param {*} name name of the element to return
   */
  elementWithName (elements, name) {
    for (var i in elements) {
      var element = elements[i]
      if (element.name === name) {
        return element
      }
    }
  }

  /**
   *
   * @param {*} nutritionalInformation
   * @param {*} divider
   * @returns nutritional info
   */
  dividedBy (nutritionalInformation, divider) {
    var divided = {}
    divided.calories = nutritionalInformation.calories / divider
    divided.protein = { weight: nutritionalInformation.protein.weight / divider, unit: nutritionalInformation.protein.unit }
    divided.fat = { weight: nutritionalInformation.fat.weight / divider, unit: nutritionalInformation.fat.unit }
    divided.carbohydrates = { weight: nutritionalInformation.carbohydrates.weight / divider, unit: nutritionalInformation.carbohydrates.unit }
    divided.sugar = { weight: nutritionalInformation.sugar.weight / divider, unit: nutritionalInformation.sugar.unit }
    divided.fibre = { weight: nutritionalInformation.fibre.weight / divider, unit: nutritionalInformation.fibre.unit }
    divided.vitamins = this.elementsDividedBy(nutritionalInformation.vitamins, divider)
    divided.minerals = this.elementsDividedBy(nutritionalInformation.minerals, divider)
    return divided
  }

  /**
   *
   * @param {*} elements  list of elements
   * @param {*} divider number to divide weight by
   * @returns list of elements
   */
  elementsDividedBy (elements, divider) {
    var divided = []
    for (var i in elements) {
      var element = elements[i]
      var dividedElement = {
        name: element.name,
        amount: {
          weight: element.amount.weight / divider,
          unit: element.amount.unit
        },
        dailyNorm: element.dailyNorm
      }
      divided.push(dividedElement)
    }
    return divided
  }

  elementsMultipliedBy (elements, multiplier) {
    return this.elementsDividedBy(elements, 1 / multiplier)
  }
}
