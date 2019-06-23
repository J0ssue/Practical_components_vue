<style lang="scss" scoped>
	.main {
		width: 70%;
		height: 3000px;
		background: #d3d3d3;
		text-align: left;
		padding: 10px;
		a {
			color: teal;
			text-decoration: none;
		}
	}

	.dynamic-button {
		background-color: teal;
		position: absolute;
		right: 10px;
		bottom: 10px;
		border-radius: 50%;
		color: white;
		width: 80px;
		height: 80px;
		font-size: 50px;
		line-height: 8px;
		// &:hover {
		// 	bg
		// }
	}
</style>
<template>
	<div>
		<h1>Conditional Visibility</h1>
		<div class="main">
			<a href="#">New Post</a>
		</div>
		<button class="dynamic-button">+</button>
	</div>
</template>

<script>
	export default {
		name: "ShowHiddenElement"
	};
</script>

