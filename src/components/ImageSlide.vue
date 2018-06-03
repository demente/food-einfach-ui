<template>
<div class="carousel-item" :class="{active : isFirst}">
	<img class="d-block w-100" :src="image.file" :alt="image.description">
</div>
</template>

<script>
export default {
	name: 'ImageSlide',
	props: ['image', 'isFirst']
}
</script>