export default class NutritionalInformation {
    
    average(recipeList) {
        var nutritionsList = [];
        for (var i in recipeList) {
          var recipe = recipeList[i].recipe;
          console.log("The outcome to be divided by number of servings: " + recipe.servings)
          
          }
        
        return [ ]
      }

      perRecipeServing(recipe){
        
        var perIngredient = [];

        for (var j in recipe.ingredients) {
            var ingredient = recipe.ingredients[j];
        
            var timesHundredGrams = ingredient.amount.weight / 100000000

            var info = {}
            info.calories = ingredient.food.nutritionalInformation.calories * timesHundredGrams 
            info.carbohydrates = ingredient.food.nutritionalInformation.carbohydrates.weight * timesHundredGrams 
            info.fat = ingredient.food.nutritionalInformation.fat.weight * timesHundredGrams 
            info.fibre = ingredient.food.nutritionalInformation.fibre.weight * timesHundredGrams 
            info.protein =ingredient.food.nutritionalInformation.protein.weight * timesHundredGrams 
            info.sugar = ingredient.food.nutritionalInformation.sugar.weight * timesHundredGrams 

            perIngredient.push(info)
        }

        var total = this.calculateTotal(perIngredient)
        return this.divideAllBy(total, recipe.servings)

    } 
    
    total(nutritionalInformationList){
        var total = {
            calories: 0,
            carbohydrates: 0,
            fat: 0,
            fibre: 0,
            protein: 0,
            sugar: 0
        }
        for(var i in nutritionalInformationList){
            var info = nutritionalInformationList[i]
            total.calories += info.calories
            total.carbohydrates +=info.carbohydrates
            total.fat += info.fat
            total.fibre += info.fibre
            total.protein += info.protein
            total.sugar += info.sugar
        }
        return total;
    }

    dividedBy(nutritionalInformation, divider){
        var divided = {};
        divided.calories = nutritionalInformation.calories / divider
        divided.protein = {weight: nutritionalInformation.protein.weight / divider, unit: nutritionalInformation.protein.unit}
        divided.fat = {weight: nutritionalInformation.fat.weight / divider, unit: nutritionalInformation.fat.unit}
        divided.carbohydrates = { weight: nutritionalInformation.carbohydrates.weight / divider, unit: nutritionalInformation.carbohydrates.unit}
        divided.sugar =  {weight:nutritionalInformation.sugar.weight / divider, unit: nutritionalInformation.sugar.unit}
        divided.fibre =  {weight: nutritionalInformation.fibre.weight / divider, unit: nutritionalInformation.fibre.unit}
        divided.vitamins = this.elementsDividedBy(nutritionalInformation.vitamins, divider)
        divided.minerals = this.elementsDividedBy(nutritionalInformation.minerals, divider)
        return divided;
    }

    elementsDividedBy(elements, divider){
        var divided = []
        for(var i in elements){
            var vitamin = elements[i]
            var dividedVitamin = { name: vitamin.name,
            amount: {
              weight: vitamin.amount.weight / divider,
              unit: vitamin.amount.unit
            },
            dailyNorm: vitamin.dailyNorm
            }
            divided.push(dividedVitamin)
        }
        return divided
    }

}