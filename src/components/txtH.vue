<template>
	<h1>颜色是：{{color}},共有{{nRow}}行</h1>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		computed:{
			...mapState(['color','nRow'])
		}
		}
		
</script>

<style scoped>
	textarea {
		font-weight: 700;
	}
</style>