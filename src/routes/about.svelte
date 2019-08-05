<script>
	import { fade, slide } from "svelte/transition";
	import { getAboutData } from "../data/about_data";

	const about = getAboutData();
	let showDescription = false;
	export let y;
</script>

<style>
  .frosted-glass {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div in:slide="{{ delay: 220 }}" out:fade class="frosted-glass max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 rounded-lg shadow-xl" on:mouseover="{() => showDescription = true}" on:mouseout="{() => showDescription = false}">
	<figure class="w-1/3 mr-4">
		<img src="ben.jpg" alt="Ben" class="cursor-pointer hover:opacity-75 rounded-full w-30 h-30" on:click="{() => showDescription = true}" />
	</figure>
	<div class="w-2/3 text-justify">
		{about.about.introduction}
		{#if showDescription}
			<div transition:slide>
				<p class="mt-4"><b>Less is more!</b> I believe less code is more maintainable and efficient.</p>
				<p class="mt-4">Contact me at <a class="text-green-600 font-bold" href="mailto: benjamin.lisneuf@gmail.com">benjamin.lisneuf@gmail.com</a></p>
			</div>
		{/if}
	</div>
</div>