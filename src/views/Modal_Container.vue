<template>
	<div>
		<header>
			<h1 class="text-center  text-3xl font-bold">Modal</h1>
		</header>

		<p>
			<a href="#cancel-modal">Open Modal</a>
		</p>

		<modal name="cancel-modal">
			<h1 class="font-bold text-xl mb-2">Leaving so soon?</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
				eveniet magnam repudiandae!
			</p>
			<template v-slot:footer="{ foo }">
				<button
					@click="$modal.hide('cancel')"
					class="bg-red-500 py-2 px-4 rounded-full text-white hover:bg-red-600 mr-3"
				>
					Cancel
				</button>
				<a
					href="#confirm-cancel-modal"
					class="bg-green-500 py-2 px-4 rounded-full text-white hover:bg-green-600 "
					>Continue</a
				>
				<!-- <a href="#" class="text-green-500">{{ foo }}</a> -->
				<!--receiving slot prop-->
			</template>
		</modal>

		<modal name="confirm-cancel-modal">
			<h1 class="font-bold text-xl mb-2">You're 100% sure?</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
				eveniet magnam repudiandae!
			</p>
			<template v-slot:footer="{ foo }">
				<button
					class="bg-red-500 py-2 px-4 rounded-full text-white hover:bg-red-600 mr-3"
					@click="$modal.hide('cancel')"
				>
					Cancel
				</button>
				<a
					href="#"
					class="bg-green-500 py-2 px-4 rounded-full text-white hover:bg-green-600 "
					>Yes</a
				>
				<!-- <a href="#" class="text-green-500">{{ foo }}</a> -->
				<!--receiving slot prop-->
			</template>
		</modal>
	</div>
</template>

<script>
	export default {};
</script>