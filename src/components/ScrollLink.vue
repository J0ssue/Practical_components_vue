<template>
	<!-- actual link iwth href prop and scroll function added on click: -->
	<a :href="href" @click.prevent="scroll"><slot></slot></a>
</template>

<script>
	// NPM INSTALLED POLYFILL FUPPORT FOR ALL BROWSERS:
	// -after install import into component that uses scroll behavior.
	import smoothscroll from "smoothscroll-polyfill";
	export default {
		// takes in a string props of href for the link its going to:
		props: ["href"],
		name: "ScrollLink",
		created() {
			// on created call smooth scroll polyfill so that it gets started:
			smoothscroll.polyfill();
		},
		// smooth scrolling method:
		methods: {
			scroll() {
				document.querySelector(this.href).scrollIntoView({ behavior: "smooth" });
			}
		}
	};
</script>

