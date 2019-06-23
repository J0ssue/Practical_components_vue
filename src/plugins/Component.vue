<style lang="scss" scoped>
	.overlay {
		visibility: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		transition: opacity 0.3s;
		opacity: 0;

		&:target {
			visibility: visible;
			opacity: 1;
		}

		.cancel {
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.modal {
		position: relative;
		width: 500px;
		max-width: 80%;
		background: white;
		border-radius: 4px;
		padding: 2.5em;
		box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);
		.close {
			position: absolute;
			top: 15px;
			right: 15px;
			color: grey;
			text-decoration: none;
		}
	}

	footer:empty {
		display: none;
	}
</style>

<template>
	<div :id="name" class="overlay">
		<a href="#" class="cancel"></a>

		<div class="modal">
			<slot></slot>

			<a href="#" class="close font-bold">x</a>

			<footer class="mt-4">
				<!-- passing slot prop 'foo' -->
				<slot name="footer" class="close" foo="hello_world"></slot>
			</footer>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["name"]
	};
</script>
