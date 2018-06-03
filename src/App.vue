<template>
<div id="app">
	<NavigationBar />
	<div class="container">
		<router-view />
	</div>
</div>
</template>

<script>
import 'bootstrap'
import NavigationBar from './components/NavigationBar'

export default {
  name: 'App',
  components: {NavigationBar}
}
</script>


<style lang="scss">
$fa-font-path:"../node_modules/font-awesome/fonts";
@import './assets/css/minty.css';
@import '../node_modules/font-awesome/scss/font-awesome.scss';
</style>