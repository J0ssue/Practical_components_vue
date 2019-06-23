<style lang="scss" scoped>
	.menu {
		margin-right: auto;
		margin-left: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 400px;
		height: 400px;
		background: #d3d3d3;
	}
	.link {
		display: block;
		color: white;
		text-decoration: none;
		padding: 15px;
		padding-right: 50px;
		transition: background 0.2s ease-in-out;
		&:hover {
			background: coral;
		}
	}
</style>

<template>
	<div class="context-menu-view">
		<h1>Context Menu</h1>
		<div class="menu">
			<dropdown>
				<template v-slot:trigger>
					<button>...</button>
				</template>
				<li><a class="link" href="#">Edit</a></li>
				<li><a class="link" href="#">Delete</a></li>
				<li><a class="link" href="#">Report</a></li>
			</dropdown>
		</div>
		<hr />

		<div class="menu">
			<dropdown>
				<template v-slot:trigger>
					<button>click</button>
				</template>
				<li><a class="link" href="">one</a></li>
				<li><a class="link" href="">two</a></li>
				<li><a class="link" href="">three</a></li>
				<li><a class="link" href="">four</a></li>
			</dropdown>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

