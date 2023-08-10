import VueRouter from 'vue-router';
import tb from '../components/Tb';
import txtH from '../components/txtH';
export default new VueRouter({
	routes:[
		{	
			name:'tbrt',
			path:'/tb',
			component:tb
		},
		{
			name:'txtHrt',
			path:'/txtH',
			component:txtH			
		}
	]
})