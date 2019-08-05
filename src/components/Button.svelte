<script>
	export let buttonColor;
</script>

<style>
	.btn-container {
	  background-color: rgba(255, 255, 255, 0.5);
	}
</style>

<button class="btn-container hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-transparent rounded">
	<slot></slot>
</button>
