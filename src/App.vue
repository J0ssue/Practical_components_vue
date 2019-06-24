<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link :to="{ name: 'smooth-scroll' }">Smooth Scroll</router-link> |
			<router-link :to="{ name: 'context-menu' }">Context Menu</router-link> |
			<router-link :to="{ name: 'show-hidden-el' }"
				>Show Hidden Element</router-link
			>
			|
			<router-link :to="{ name: 'modal' }">modal</router-link> |
			<router-link :to="{ name: 'confirmation-button' }"
				>Confirmation Dialogs</router-link
			>
		</div>
		<router-view />
	</div>
</template>

<script>
	import "./main.scss";
	export default {
		name: "App"
	};
</script>