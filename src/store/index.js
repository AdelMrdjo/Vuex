import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	title:'My Custom Title2',
  	links:[
  		'http://google.com',
  		'http://coursetro.com',
  		'http://youtube.com'
  	],
  	users:[],
  },
  getters:{
  	countLinks: state => {
  		return state.links.length;
  	}
  },
  mutations: {
  	ADD_LINK: (state,link) =>{
  		state.links.push(link);
  	},
  	REMOVE_LINK: (state,link) =>{
  		state.links.splice(link,1);
  	},
  	REMOVE_ALL_LINKS: (state) =>{
  		state.links = [];
  	},
  	SET_USERS: (state,users)=>{
  		state.users = users;
  	}
  },
  actions: {
  	removeLink: (context,link)=>{
  		context.commit("REMOVE_LINK",link);
  	},
  	loadUsers({commit}){
  		axios.get("https://jsonplaceholder.typicode.com/users")
  			 .then(data=>{
  			 	commit("SET_USERS",data.data);
  			 })
  			 .catch(error=>{
  			 	console.log(error);
  			 })
  	}
  },
  modules: {
  }
})
