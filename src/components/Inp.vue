<template>
	<div class='inp'>
	<input v-chg='color' v-model="color" @keyup.enter='sendMsg(color)'>
	<!-- <el-input v-chg='color' v-model="color" @keyup.enter='sendMsg(color)' placeholder="请输入内容"></el-input> -->
	<!-- <input v-chg='color' @keyup.enter='sendMsg(color)'> -->
<!-- 	<input @keyup.enter='sendMsg'> -->
<!-- <textarea v-model='color'></textarea> -->
	<el-button @click="test" ref="btn" type="primary">执行方法的第{{n}}种写法</el-button>
	<!-- <button @click="test" ref="btn">执行方法的第{{n}}种写法</button> -->
	<button @click='showName'>点我{{nRow}}</button>
	</div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	// import vuex from 'vuex'
//import $ from 'jquery';
// import {mixin} from '../assets/mixin.js';
// import pubsub from 'pubsub-js';
export default {
	name:'inp',
	data(){
		return {
			color:localStorage.getItem('color')||'yellow',
			color2:'red',
			n:1
		}
	},
	computed:{
		...mapState(['nRow'])
		// ...mapState(['color','nRow'])
	},
	props:['nameSent'],
	methods:{
		test(e){
			this.n++;
//			if(this.n<=10){this.n=this.n+2}else{this.n=this.n-5};
//			$('input').css('background-color',e.target.value);
			// console.log(this.$refs.btn)
		},
		// sendMsg(){
			// console.log(this);
			// console.log('触发事件',this.color);
			// console.log('收到APP数据',this.nameSent);
//			this.receive(e)
			// this.$bus.$emit('color',this.color);
			// pubsub.publish('color',this.color)、
			// this.$store.dispatch('colorTrans',this.color)			
			// this.$store.commit('ColorTrans',this.color)
		// },
		...mapMutations({sendMsg:'ColorTrans'}),
	},
	watch:{
		color(val){
			localStorage.setItem('color',val)
		},
		n(val,valold){
			console.log('n',valold,'-->',val)
		}
	},
	updated(){
			console.log('inp的color = ',this.color)
	}
	// mixins:[mixin]
	
}

</script>

<style scoped>
	.inp,input,button {
		
		display: block;
	}
	textarea {
		float:left
	}
</style>