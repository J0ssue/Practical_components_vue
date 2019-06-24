<style lang="scss" scoped>
</style>
<template>
	<div class="font-sans p-10">
		<h1 class="text-2xl font-bold mb-8">Confirmation Dialogs</h1>

		<div class="mb-6">
			<form method="POST">
				<confirm-button
					message="you sure?"
					class="bg-green-500 hover:bg-green-600 py-2 px-6 text-white rounded-lg"
					>Option 1
				</confirm-button>

				<confirm-button
					message="you sure?"
					cancel-button="Go Back"
					confirm-button="Continue On"
					class="bg-green-500 hover:bg-green-600 py-2 px-6 text-white rounded-lg"
					>Option 2
				</confirm-button>
			</form>
		</div>
		<confirmation-dialog></confirmation-dialog>
	</div>
</template>

<script>
	export default {};
</script>

