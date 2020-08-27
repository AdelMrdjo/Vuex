<template>
	<div class="adel">
		<h1>Test {{ id }}</h1>
		<ul>
			<li v-for="(link,index) in links" :key="index">{{link}} <button @click="removeLinkByID(index)">Remove</button></li>
		</ul>
		<hr>
		<ul>
			<li v-for="x in users">{{x.email}}</li>
		</ul>
	</div>
</template>
<script>
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'adel',
		data(){
			return{
				id:''
			}
		},
		created(){
			this.$store.dispatch("loadUsers");
			this.id = this.$route.params.id;
		},
		computed:{
			...mapState(['title','links','users'])
		},
		methods:{
			...mapMutations(['REMOVE_LINK']),
			removeLinkByID: function(link){
				this.REMOVE_LINK(link);
			}
		}
	}
</script>