<script>
	import SplashScreen from "../components/SplashScreen.svelte";
	import Nav from "../components/Nav.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte-transitions";

	export let segment;

	let showSplashScreen = true;
	const time = 1300;

	onMount(() => {
	  setTimeout(() => (showSplashScreen = false), time);
	});
</script>

{#if showSplashScreen}
	<div transition:fade>
		<SplashScreen />
	</div>
{:else}
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>

	
{/if}