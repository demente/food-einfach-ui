<template>
<div class="row">
	<div class="column-sm col-form-label">
		<TypeTag v-for="type in types" :type="type" />
	</div>
</div>
</template>

<script>
import TypeTag from './TypeTag'

export default {
  name: 'RecipeType',
  components: {TypeTag},
  props: ['types']
}
</script>