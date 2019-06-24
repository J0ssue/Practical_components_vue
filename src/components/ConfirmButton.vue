<template>
	<button @click="confirm">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		props: ["message"],
		props: {
			message: {},
			confirmButton: { default: "Continue On" },
			cancelButton: { default: "Cancel" }
		},
		data() {
			return {
				confirmed: false
			};
		},
		methods: {
			confirm(e) {
				if (this.confirmed) {
					return;
				}

				e.preventDefault();

				this.$modal.dialog(this._props).then(confirmed => {
					this.confirmed = confirmed;

					if (confirmed) {
						this.$el.click();
					}
				});
			}
		}
	};
</script>