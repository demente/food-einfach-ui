<template>
<div class="row">
	<div class="col">
		<div class="row">Servings:</div>
		<div class="row">Preparation time:</div>
		<div class="row">Cooking time:</div>
		<div class="row">Total time:</div>
	</div>
	<div class="col text-right">
		<div class="row">{{servings}}</div>
		<div class="row">{{preparationTime}} minutes</div>
		<div class="row">{{cookingTime}} minutes</div>
		<div class="row">{{totalTime}} minutes</div>
	</div>

</div>

</template>

<script>
export default{
	name: 'PreparationInfo',
	props: ['servings', 'preparationTime', 'cookingTime'],
	computed: {
		totalTime(){
			return this.preparationTime + this.cookingTime
		}
	}
}
</script>