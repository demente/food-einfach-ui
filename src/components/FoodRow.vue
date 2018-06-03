<template>
<div class="row">
<div class="col">{{food.name}}</div>
<div class="col">{{food.type}}</div>
</div>
</template>

<script>
export default{
	name: 'FoodRow',
	props: ['food']
}
</script>