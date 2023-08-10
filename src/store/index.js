import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

const actions = {
	getData(context){
		axios.get('http://localhost:8080/echart测试/mysql2json.json').then(
		(res)=>{		
			context.commit('GetData',res.data);
			context.commit('NRowGen',res.data)
			// this.curExRt = res.data;
			// this.curKeys = Object.keys(res.data[0]);
		},
		(error)=>{
			console.log('错误代码',error.code,'错误信息',error.message);	
		}
		);	
	},
	deleteRow(context,value){
		// console.log(context);
		if(confirm('确定删除dt="'+value.dt+'"的记录吗？')){
			context.commit('DeleteRow',value);
			console.log(value);
		// this.updRow(this.curExRt);
			console.log('dt为',value.dt,'的记录已经被删除了');
		}
	},

};
const mutations = {
	GetData(state,value){
		console.log(value);
		state.curExRt=value;
		state.curKeys=Object.keys(value[0]);
		console.log('json读取完毕');
		console.log('行数',value.length);
	},
	DeleteRow(state,value){
		// console.log('value = ',value)
		state.curExRt = state.curExRt.filter((cur)=>{
			return cur.dt!==value.dt;
		});
		state.nRow = state.curExRt.length;
		console.log(state.curExRt)
	},
	ColorTrans(state,value){
		state.color=value
	},
	NRowGen(state,value){
		// console.log('调用RowUpd',state,value);
		state.nRow=value.length
	}
};
const state = {
	color:localStorage.getItem('color')||'yellow',	
	nRow:0,
	curExRt:[],
	curKeys:{}
};

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	mutations,
	state
});
