<script>
	import SplashScreen from "../components/SplashScreen.svelte";
	import Background from "../components/Background.svelte";
	import Nav from "../components/Nav.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte-transitions";

	export let segment;
	export let y;

	let showSplashScreen = true;
	const time = 1300;

	onMount(() => {
	  setTimeout(() => (showSplashScreen = false), time);
	});
</script>

<svelte:window bind:scrollY={y}/>

{#if showSplashScreen}
	<div transition:fade>
		<SplashScreen />
	</div>
{:else}
	<Background {y} />
	<div class="foreground">
			<Nav {y} {segment}/>
			<main class="mt-4">
				<slot></slot>
			</main>
	</div>
	
{/if}

<style>
	.foreground {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	}

	:global(.shadow-xl) {
	  /* -webkit-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
	  box-shadow: 0 20px 25px -5px #e53e3e, 0 10px 10px -5px #220002;
	}
</style>