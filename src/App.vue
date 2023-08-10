<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png"> -->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<inp :nameSent='name'/>

<router-link to='/tb'>TB显示</router-link><br />
<router-link to='/txtH'>底部显示</router-link>
<hr />
<keep-alive include="tb">
	<router-view></router-view>	
</keep-alive>

<!-- <tb />
<txtH /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import router from '../src/router';

import tb from './components/Tb';
import inp from './components/Inp';
import txtH from './components/txtH';

export default {
  name: 'App',
  components: {
    // HelloWorld
	tb,inp,txtH
  },
  data(){
	  return {
		name:'women'		  
	  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px; */
}
</style>
