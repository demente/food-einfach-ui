<template>
    <div class="container">

            <div class="row">
                    <h1>Meal plan</h1>
            </div>

            <div class="row">
                <div class="col">
                    <h3>Monday</h3>
                    <div class="row">
                        <h5>Breakfast</h5>
                    </div>
                    <div class="row">
                        <input type="button" value="Add recipe" class="btn btn-primary btn-sm offset-1"/>
                        <input type="button" value="Add food" class="btn btn-primary btn-sm offset-1"/>
                        
                    </div>
                    <div class="row">
                        Lunch
                    </div>
                    <div class="row">
                        Dinner
                    </div>
                </div>
                <div class="col">
                    Average nutrition per day
                </div>
            </div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>

    </div>
</template>

<script>
export default {
    name: 'MealPlanNewView',
    data() {
        return {
            mealPlan: {
                id: null,
                recipes: []
            }
        }
    }
}
</script>

