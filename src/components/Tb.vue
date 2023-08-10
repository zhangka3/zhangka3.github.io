<template>
<table>
	<thead>
		<tr><th :colspan='curKeys.length+2'><p>我这是测试{{color}}</p></th></tr>
		<tr v-chg='color'>
			<th></th>
			<th @click="showName(item)" v-for="(item,index) in curKeys" v-if="index > 0">{{item}}</th>
			<th>点击删除</th>
		</tr>
	</thead>
	<tbody>
		<tr v-chg='color' v-for="(item,index) in curExRt" :key='item.dt'>
			<td><input type='checkbox' :checked='item.done'></td>
			<td @click="showName($event,k)" v-for="(k,index) in item" v-if="index !== 'done' && index !== 'isEdit'"> 
				<span v-show='!item.isEdit'>{{k}}</span>
				<textarea rows="1" cols="10" v-show='item.isEdit' @blur='modifyRow($event,item,index)'>{{k}}</textarea>
			</td>
<!-- 			<td><a href='javascript:;' @click='deleteRow(item)'>Delete</a></td> -->
			<td>
				<button @click='updateRow(item,index,$event)' v-show='!item.isEdit'>Update</button>
				<button @click='deleteRow(item)'>Delete</button>
			</td>
		</tr>
		<tr><td :colspan='curKeys.length+2'>我是在测试</td></tr>
	</tbody>
</table>
</template>

<script>
//import {nanoid} from 'nanoid'
// import {mixin} from '../assets/mixin.js';
//import pubsub from 'pubsub-js';
import {mapActions,mapState,mapMutations} from 'vuex';
export default {
	name:'tb',
	data(){
		return {
			// color:localStorage.getItem('color')||'yellow',
			color2:'red',
			// curExRt:[],
			// curKeys:{}
		}
	},
	computed:{
		...mapState(['color','curExRt','curKeys'])
	},
	created(){
		this.getData()
		// axios.get('http://localhost:8080/echart测试/mysql2json.json').then(
		// (res)=>{
		// 	// console.log(res);			
		// 	this.curExRt = res.data;
		// 	this.curKeys = Object.keys(res.data[0]);
		// 	console.log('json读取完毕');
		// 	console.log('行数',this.curExRt.length);
		// 	this.updRow(this.curExRt.length)
		// },
		// (error)=>{
		// 	console.log('错误代码',error.code,'错误信息',error.message);	
		// }
		// );		
		// $.get('http://localhost:8080/echart测试/mysql2json.json').done((data)=>{
		// 	this.curExRt = data;
		// 	this.curKeys = Object.keys(data[0]);
		// 	});
	},
	mounted(){
		// this.pubid = pubsub.subscribe('color',(msgName,color)=>{this.color=color})
		// this.$bus.$on('color',(color)=>{
		// 	console.log('绑定事件',this.color);
		// 	this.te(color);
		// 	this.color=color
		// 	});
		console.log(this);
	},
	updated(){
		// console.log('更新完毕');
		
	},
	beforeDestroy(){
		// this.$bus.$off('color')
		// pubsub.unsubscribe(this.pubid)
	},
	methods:{
		updateRow(item,index,e){
			if(item.hasOwnProperty('isEdit')){
				item.isEdit=!item.isEdit;		
			}else {
				this.$set(item,'isEdit',true)
			}
		},
		modifyRow(e,item,index){
			// console.log(item);
			// console.log(index);
			// console.log(item[index]);			
			// console.log(e);
			item[index]=e.target.value;
			item.isEdit=!item.isEdit;
		},		
		te(color){
			alert(color);
		},
		// deleteRow(item){
		// 	if(confirm('确定删除dt="'+item.dt+'"的记录吗？')){
		// 		this.curExRt = this.curExRt.filter((cur)=>{
		// 		return cur.dt!==item.dt;
		// 		})
		// 	// this.updRow(this.curExRt);
		// 	console.log('dt为',item.dt,'的记录已经被删除了');
		// 	}
		// },
		// updRow(){},
		...mapActions(['getData','deleteRow'])
	},
	// mixins:[mixin]
	
}
</script>

<style>
	table,th,td {
		border-collapse: collapse;
		border: 1px solid black;
	}
	tbody tr:hover {
		font-weight: bolder;
		background-color: aqua !important;
	}
	thead>tr:hover {
		font-size: 20px;
		color:white;
		background-color: black !important;
	}
	tr td:first-child{
		width:20px;
	}
	td button {
		display:none
	}
	tr:hover td button {
		display:inline
	}
	td textarea {
		border-collapse: collapse;	
		overflow-y:hidden;
		font-family: "微软雅黑";
/* 		background-color: #9ACD32; */
		border-style: none;
	}
/* 	tr td:nth-child(2) {
		display:none
	} */
	
</style>