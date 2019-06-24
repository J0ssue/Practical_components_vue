<template>
	<modal name="dialog">
		{{ params.message }}

		<template v-slot:footer>
			<button
				class="bg-red-500 hover:bg-red-600 py-2 px-6 text-white rounded-lg mr-2"
				@click.prevent="handleClick(false)"
				v-text="params.cancelButton"
			></button>
			<button
				class="bg-green-500 hover:bg-green-600 py-2 px-6 text-white rounded-lg"
				@click.prevent="handleClick(true)"
				v-text="params.confirmButton"
			></button>
		</template>
	</modal>
</template>

<script>
	import Modal from "../plugins/ModalPlugin";

	export default {
		data() {
			return {
				params: {
					message: "Are you sure?",
					confirmButton: "Continue",
					cancelButton: "Cancel"
				}
			};
		},

		beforeMount() {
			// lsiten for that event
			// fetch the params
			// asign it to the data object
			Modal.events.$on("show", params => {
				Object.assign(this.params, params);
			});
		},

		methods: {
			handleClick(confirmed) {
				// emit
				Modal.events.$emit("clicked", confirmed);

				this.$modal.hide();
			}
		}
	};
</script>

