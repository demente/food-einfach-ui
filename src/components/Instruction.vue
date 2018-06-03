<template>
<div class="row">
	<div class="col">
		<h3>Instructions</h3>
		<div class="row" v-for="step in steps">
			<b>Step {{step.number}}</b>
			<p>{{step.description}}</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'Instruction',
  props: ['steps']
}
</script>