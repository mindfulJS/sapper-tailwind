<script>
	export let color;
</script>

{#if color === "white"}
	<button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
		<slot></slot>
	</button>
{:else}
	<button class="bg-{color}-500 hover:bg-{color}-700 text-white font-bold py-2 px-4 border border-{color}-700 rounded">
		<slot></slot>
	</button>
{/if}