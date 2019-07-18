<script>
	import { slide } from "svelte-transitions";
	let showDescription = false;
	export let y;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div transition:slide class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex p-6 m-6 bg-white rounded-lg shadow-xl" on:mouseover="{() => showDescription = true}" on:mouseout="{() => showDescription = false}">
	<figure class="w-1/3 mr-4">
		<img src="ben.jpg" alt="Ben" class="cursor-pointer hover:opacity-75 rounded-full w-30 h-30" on:click="{() => showDescription = true}" />
	</figure>
	<div class="w-2/3 text-justify">
		My name is Ben Lisneuf and I am an ambitious web developer based in London. I am passionate about new technology and inspired by fast-growing companies.
		{#if showDescription}
			<div transition:slide>
				<p class="mt-4"><b>Less is more!</b> I believe less code is always more efficient and maintainable.</p>
				<p class="mt-4">Contact me at <a class="text-green-600 font-bold" href="mailto: benjamin.lisneuf@gmail.com">benjamin.lisneuf@gmail.com</a></p>
			</div>
		{/if}
	</div>

</div>