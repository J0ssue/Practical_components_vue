<style lang="scss" scoped>
	// TRANSITION CAN BE CHANGED FOR DESIRED ONE IF NEEDED:
	.pop-out-quick-enter-active,
	.pop-out-quick-leave-active {
		transition: all 0.4s;
	}
	.pop-out-quick-enter,
	.pop-out-quick-leave-active {
		opacity: 0;
		transform: translateY(-7px);
	}
	// THIS IS A REUSABLE COMPONENT THAT YOU SHOULD STYLE YOURSELF:
	// -SO DEPENDING ON WHAT ELEMENTS ARE BEING PASSED STYLE ACCORDINGLY TO YOUR LIKING.
	// - STYLE COMPONENT AS YOU LIKE!
	.dropdown {
		position: relative;
		.dropdown-list {
			margin: 0;
			padding: 0;
			position: absolute;
			list-style: none;
			background: black;
			border-radius: 5%;
			margin-top: 15px;
			z-index: 10;
			font-size: 12px;
			text-align: left;
		}
	}
</style>
<template>
	<div class="dropdown">
		<!-- this toggles the menu to open and close -->
		<div
			class="dropdown-trigger"
			@click.prevent="isOpen = !isOpen"
			aria-haspopup="true"
			:aria-expanded="isOpen"
		>
			<!-- notice what elements get passed to slot so you can style them -->
			<slot name="trigger"></slot>
		</div>

		<transition name="pop-out-quick">
			<ul class="dropdown-list" v-show="isOpen">
				<!-- notice what elements get passed to slot so you can style them -->
				<slot></slot>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default {
		props: {
			menu: {
				type: String
			}
		},
		data() {
			return {
				isOpen: false
			};
		},

		watch: {
			isOpen(isOpen) {
				if (isOpen) {
					document.addEventListener("click", this.outsideClickCloseDropdown);
				}
			}
		},

		methods: {
			outsideClickCloseDropdown(event) {
				if (!event.target.closest(".dropdown")) {
					this.isOpen = false;
				}
			}
		}
	};
</script>

