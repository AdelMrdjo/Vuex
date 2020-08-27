<template>
	<div class="test">
		<h1>Hello World</h1>
		<h2>{{title}}</h2>
		<p>Ukupan broj linkova: {{countLinks}}</p>
	</div>
</template>
<script>
	import {mapState,mapGetters} from 'vuex'
	export default{
		name:'Test',
		data(){
			return{
				newText:''
			}
		},
		computed:{
			...mapState(['title']),
			...mapGetters(['countLinks']),
		}
	}
</script>