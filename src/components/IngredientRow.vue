<template>
<div class="row">
	<div class="col">{{ingredient.name}}</div>
	<div class="col text-right">{{ingredient.amount}}</div>
</div>
</template>

<script>
export default {
	name: 'IngredientRow',
	props: ['ingredient']
}
</script>