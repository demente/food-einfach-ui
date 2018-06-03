<template>
<div class="row">
	<div class="col" :class=" {'offset-1' : element.parent} ">{{element.name}}</div>
	<div class="col text-right">{{element.amount}}</div>
</div>
</template>

<script>
export default {
	name: 'NutritionRow',
	props: ['element']
}
</script>