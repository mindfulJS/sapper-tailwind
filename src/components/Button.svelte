<script>
	export let buttonColor;
</script>

<style>
	.btn-container {
	  background-color: rgba(255, 255, 255, 0.7);
	}
</style>

{#if buttonColor === "white"}
	<button class="btn-container hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
		<slot></slot>
	</button>
{:else}
	<button class="bg-{buttonColor}-500 hover:bg-{buttonColor}-700 text-white font-bold py-2 px-4 border border-{buttonColor}-700 rounded">
		<slot></slot>
	</button>
{/if}