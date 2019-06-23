<style lang="scss" scoped>
	#bottom {
		display: flex;
		justify-content: center;
		align-items: center;

		div {
			background: #d3d3d3;
			width: 33%;
			height: 300px;
			border: 1px solid gray;
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;

			&:nth-of-type(2) {
				margin-left: 0.5%;
				margin-right: 0.5%;
			}
		}
	}
</style>

<template>
	<div id="top">
		<h1>Smooth Scroll</h1>
		<!-- SCROLL LINK COMPONENT USAGE -->
		<scroll-link class="text-primary" href="#bottom">go To bottom</scroll-link>
		<div style="height: 2000px"></div>

		<h3>this is the bottom</h3>
		<div id="bottom">
			<div>
				<scroll-link class="text-primary" href="#top">Go to Top</scroll-link>
			</div>
			<div>two item</div>
			<div>three item</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SmoothScroll"
	};
</script>

