<script>
	import { slide } from "svelte-transitions";
	export let y;
</script>

<svelte:head>
	<title>My Portfolio</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6" style="opacity: {1 - Math.max(0, y / 200)}; transform: scale({1 - Math.max(0, y / 1500)})">
	<figure class="max-w-sm mx-auto flex p-6" >
		<img src="bitmoji.gif" alt="Ben" class="rounded-full border-4 border-gray-300 w-50 h-50 shadow-xl" />
	</figure>
</div>

<!--
<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 bg-white rounded-lg shadow-xl">
	<div class="w-1/3 mr-4">Welcome to my page</div>
	<figure class="w-2/3">
		<img src="bitmoji.gif" alt="Ben" class="rounded-full border-4 border-gray-300 w-50 h-50" />
	</figure>
</div>
-->