<template>
	<div class="stats">
		<h1>A different component</h1>
		<p>There are currently {{ countLinks}} links</p>
		<button @click="deleteAllLinks">Delete all links</button>
	</div>
</template>
<script>
	import { mapGetters, mapMutations } from 'vuex'
	export default{
		name: 'Stats',
		computed:{
			...mapGetters(['countLinks'])
		},
		methods:{
			...mapMutations(['REMOVE_ALL_LINKS']),
			deleteAllLinks: function(){
				this.REMOVE_ALL_LINKS();
			}
		}
	}
</script>
<style scoped>
	button {
	    padding: 10px;
	    margin-top: 30px;
	    width: 100%;
	    background: none;
	    border: 1px solid lightgray;
	    outline: 0;
	    cursor: pointer;
	}
</style>