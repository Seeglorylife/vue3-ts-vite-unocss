<
<script setup lang="ts">
import Layout from './layout/layout.vue';
</script>

<template>
	<Layout>
		<nav>
			<router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
			<router-link to="/demo">vue3 setup demo</router-link>
		</nav>
		<router-view />
	</Layout>
</template>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
