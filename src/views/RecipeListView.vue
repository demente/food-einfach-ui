<template>
<div>
	Here comes list of all recipes

	<router-link class="nav-item nav-link"
		:to="{name:'RecipeView', params: {id: 2}}">Recipe with
	id 2</router-link>
</div>
</template>

<script>
export default {
	 name: 'RecipeListView'
}
</script>
