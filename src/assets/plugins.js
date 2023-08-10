export default {
	install(Vue) {
		Vue.directive('chg',function(el,b,v){
				// console.log('elements',el);
				// console.log('bindings',b);		
				// console.log('vnode',v);		
				$(el).css({'background-color':b.value})
			})
		Vue.mixin({
			methods:{
				showName(event,k){
					console.log(event)
					console.log(k)
//					alert(el.target.outerHTML)
				}
			}			
		})
	}	
}