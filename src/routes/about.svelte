<script>
	import { slide } from "svelte-transitions";

	let showDescription = false;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 bg-white rounded-lg shadow-xl">
	<figure class="w-1/3 mr-4">
		<img src="ben.jpg" alt="Ben" class="cursor-pointer hover:opacity-75 rounded-full w-30 h-30" on:click="{() => showDescription = !showDescription}" />
	</figure>
	<div class="w-2/3 text-justify">
		My name is Ben Lisneuf and I am an ambitious front end developer from London. I am passionate about new technology. Inspired by fast-growing companies I hope to be part of one of them in the future.
		{#if showDescription}
			<div transition:slide>
				<p class="mt-4"><b>Less is more!</b> I believe in smaller code that efficient to run.</p>
				<p class="mt-4"><a class="text-green-600 font-bold" href="mailto: benjamin.lisneuf@gmail.com">benjamin.lisneuf@gmail.com</a></p>
			</div>
		{/if}
	</div>
</div>