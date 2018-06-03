<template>
<a :href="type.link" class="btn btn-primary btn-sm">{{type.name}}</a>
</template>

<script>
export default {
	name: 'TypeTag',
	props: ['type']
}
</script>