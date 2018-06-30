<template>
<div class="row">
<div class="col">
	<router-link :to="{name:'FoodView', params: {id: food.id}}">{{food.name}}</router-link>
	</div>
<div class="col">{{food.type}}</div>
</div>
</template>

<script>
export default {
  name: "FoodRow",
  props: ["food"]
};
</script>