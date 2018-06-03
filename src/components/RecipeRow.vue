<template>
<div class="row">
	<router-link class="nav-item nav-link"
		:to="{name:'RecipeView', params: {id: recipe.id}}">{{recipe.name}}</router-link>
</div>
</template>

<script>
export default{
	name: 'RecipeRow',
	props: ['recipe']
}
</script>