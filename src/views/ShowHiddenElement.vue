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
		position: fixed;
		right: 20px;
		bottom: 10px;
		border-radius: 50%;
		color: white;
		width: 80px;
		height: 80px;
		font-size: 50px;
		line-height: 8px;
		&:hover {
			cursor: pointer;
			background: rgba(0, 0, 0, 0.8);
		}
	}
</style>
<template>
	<div>
		<h1>Conditional Visibility</h1>
		<div class="main">
			<a href="#" id="new-post-link">New Post</a>
		</div>
		<visible when-hidden="#new-post-link">
			<button class="dynamic-button">+</button>
		</visible>
	</div>
</template>

<script>
	export default {
		name: "ShowHiddenElement"
	};
</script>

