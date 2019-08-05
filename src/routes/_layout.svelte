<script>
	import SplashScreen from "../components/SplashScreen.svelte";
	import BackgroundParallax from "../components/BackgroundParallax.svelte";
	import Nav from "../components/Nav.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let segment;
	export let y;

	let showSplashScreen = true;
	const time = 1300;

	onMount(() => {
	  setTimeout(() => (showSplashScreen = false), time);
	});
</script>

<style>
	:global(html) {
	  scroll-behavior: smooth;
	}

	:global(body) {
	  background-color: rgb(32, 0, 1);
	  text-align: center;
	  margin: auto;
	  width: 100%;
	}

	:global(.shadow-xl) {
	  /* -webkit-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
	  box-shadow: 0 20px 25px -5px #e53e3e, 0 10px 10px -5px #220002;
	}

	:global(.shadow-xl2) {
	  /* -webkit-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
	  box-shadow: 0 20px 25px -5px white, 0 10px 10px -5px #220002;
	}

	.foreground {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	}
</style>

<svelte:window bind:scrollY={y}/>

{#if showSplashScreen}
	<div transition:fade>
		<SplashScreen />
	</div>
{:else}

	<BackgroundParallax {y} />
	<div class="foreground">
			<Nav {segment}/>
			<main class="mt-4">
				<slot {y}></slot>
			</main>
	</div>
	
{/if}

