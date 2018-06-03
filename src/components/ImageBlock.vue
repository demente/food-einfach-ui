<template>
<div class="row align-items-center">
	<div id="carouselExampleIndicators"
		class="carousel slide  align-items-center" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0"
				class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner">
			<ImageSlide v-for="(image,index) in images" :image="image" :isFirst="index===0" :key="image.file" />
		</div>
		<a class="carousel-control-prev" href="#carouselExampleIndicators"
			role="button" data-slide="prev"> <span
			class="carousel-control-prev-icon" aria-hidden="true"></span> <span
			class="sr-only">Previous</span>
		</a> <a class="carousel-control-next" href="#carouselExampleIndicators"
			role="button" data-slide="next"> <span
			class="carousel-control-next-icon" aria-hidden="true"></span> <span
			class="sr-only">Next</span>
		</a>
	</div>
</div>
</template>

<script>
import ImageSlide from './ImageSlide'
export default {
  name: 'ImageBlock',
  components: {ImageSlide},
  props: ['images']
}
</script>