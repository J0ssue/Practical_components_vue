<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease-in-out;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>

<template>
	<transition name="fade">
		<div v-show="shouldDisplay">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
	// in-viewport library:
	import inViewport from "in-viewport";

	export default {
		props: ["whenHidden"],

		data() {
			return {
				shouldDisplay: false
			};
		},

		mounted() {
			window.addEventListener(
				"scroll",
				() => {
					this.shouldDisplay = !inViewport(
						document.querySelector(this.whenHidden)
					);
				},
				{ passive: true }
			);
		}
	};
</script>

